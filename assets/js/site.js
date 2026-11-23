// Oh! Retail Help: guide menu on small screens, "on this page" highlighting,
// and search over /index.json. Every page works without this file.

const INDEX_URL = '/index.json'
const MAX_POP = 7

// ---------- Guide menu (small screens) ----------

const toggle = document.querySelector('[data-side-toggle]')
const sideNav = document.querySelector('[data-side-nav]')
if (toggle && sideNav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true'
    toggle.setAttribute('aria-expanded', String(open))
    sideNav.classList.toggle('is-open', open)
  })
}

// ---------- On this page ----------

const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')]
if (tocLinks.length && 'IntersectionObserver' in window) {
  const byId = new Map(tocLinks.map((a) => [decodeURIComponent(a.hash.slice(1)), a]))
  const headings = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean)
  const visible = new Set()
  const mark = () => {
    const first = headings.find((h) => visible.has(h)) || null
    if (!first) return
    for (const a of tocLinks) a.removeAttribute('aria-current')
    byId.get(first.id)?.setAttribute('aria-current', 'true')
  }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)
    mark()
  }, { rootMargin: '-80px 0px -60% 0px' })
  headings.forEach((h) => io.observe(h))
}

// ---------- Search ----------

let indexPromise
const loadIndex = () => {
  indexPromise ??= fetch(INDEX_URL, { credentials: 'same-origin' })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`index ${r.status}`))))
    .then((pages) => pages.map((p) => ({
      ...p,
      _title: fold(p.title),
      _desc: fold(p.description),
      _text: fold(p.text),
      _heads: (p.headings || []).map((h) => ({ ...h, _t: fold(h.title) })),
    })))
    .catch((err) => {
      indexPromise = undefined
      throw err
    })
  return indexPromise
}

const fold = (s) => (s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, "'")
const terms = (q) => fold(q).split(/[^a-z0-9$'.]+/).map((t) => t.replace(/^[.']+|[.']+$/g, '')).filter((t) => t.length > 1 || /\d/.test(t))

// Every term must appear somewhere. Title and heading hits outrank body text,
// and a heading hit links straight to that section.
function search(pages, query) {
  const words = terms(query)
  if (!words.length) return []
  const hits = []
  for (const p of pages) {
    let score = 0
    let ok = true
    for (const w of words) {
      let s = 0
      if (p._title.includes(w)) s += 12
      if (p._desc.includes(w)) s += 5
      if (p._heads.some((x) => x._t.includes(w))) s += 6
      if (p._text.includes(w)) s += 1 + Math.min(4, count(p._text, w) / 3)
      if (!s) { ok = false; break }
      score += s
    }
    if (!ok) continue
    if (p._title.includes(fold(query).trim())) score += 10
    // When the title already matches, open the page itself rather than a section.
    const heading = words.every((w) => p._title.includes(w)) ? null : bestHeading(p, words)
    if (heading && words.every((w) => heading._t.includes(w))) score += 8
    hits.push({ page: p, score, heading })
  }
  return hits.sort((a, b) => b.score - a.score)
}

const count = (text, w) => {
  let n = 0
  for (let i = text.indexOf(w); i !== -1 && n < 50; i = text.indexOf(w, i + w.length)) n++
  return n
}
const bestHeading = (p, words) => {
  let best = null
  let bestN = 0
  for (const h of p._heads) {
    const n = words.filter((w) => h._t.includes(w)).length
    if (n > bestN) { best = h; bestN = n }
  }
  return best
}

const hitURL = (hit) => (hit.heading ? `${hit.page.url}#${hit.heading.id}` : hit.page.url)
const hitPath = (hit) => [hit.page.section, hit.page.section === hit.page.title ? '' : hit.page.title, hit.heading?.title]
  .filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(' › ')

function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
  for (const kid of kids) if (kid != null) node.append(kid)
  return node
}

// A short excerpt around the first matching word, with matches marked.
function snippet(page, words) {
  const text = page.text || page.description || ''
  const folded = fold(text)
  let at = -1
  for (const w of words) {
    const i = folded.indexOf(w)
    if (i !== -1 && (at === -1 || i < at)) at = i
  }
  const start = Math.max(0, at - 60)
  const raw = (start ? '…' : '') + text.slice(start, start + 200).trim() + (start + 200 < text.length ? '…' : '')
  const frag = document.createDocumentFragment()
  const pattern = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  raw.split(pattern).forEach((part, i) => frag.append(i % 2 ? el('mark', {}, part) : part))
  return frag
}

// Header dropdown.
const form = document.querySelector('[data-search]')
const input = document.querySelector('[data-search-input]')
const pop = document.querySelector('[data-search-results]')
if (form && input && pop) {
  let selected = -1
  let seq = 0

  const close = () => {
    pop.hidden = true
    input.setAttribute('aria-expanded', 'false')
    selected = -1
  }
  const links = () => [...pop.querySelectorAll('a[data-hit]')]
  const select = (i) => {
    const all = links()
    if (!all.length) return
    selected = (i + all.length) % all.length
    all.forEach((a, n) => a.setAttribute('aria-selected', String(n === selected)))
    all[selected].scrollIntoView({ block: 'nearest' })
  }

  const render = async () => {
    const q = input.value.trim()
    const mine = ++seq
    if (!q) return close()
    let pages
    try {
      pages = await loadIndex()
    } catch {
      pop.replaceChildren(el('p', {}, 'Search is unavailable right now. Press Enter to try the search page.'))
      pop.hidden = false
      return
    }
    if (mine !== seq) return
    const hits = search(pages, q).slice(0, MAX_POP)
    const list = el('ol')
    for (const hit of hits) {
      list.append(el('li', {}, el('a', { href: hitURL(hit), 'data-hit': '' },
        el('span', { class: 'search-hit-title' }, hit.heading?.title || hit.page.title),
        el('span', { class: 'search-hit-path' }, hitPath(hit)))))
    }
    const all = el('a', { class: 'search-all', href: `${form.action}?q=${encodeURIComponent(q)}` }, `See all results for “${q}”`)
    pop.replaceChildren(hits.length ? list : el('p', {}, `Nothing matched “${q}”.`), all)
    pop.hidden = false
    input.setAttribute('aria-expanded', 'true')
    selected = -1
  }

  input.addEventListener('input', render)
  input.addEventListener('focus', () => { loadIndex().catch(() => {}); if (input.value.trim()) render() })
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); select(selected + 1) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); select(selected - 1) }
    else if (e.key === 'Escape') { close(); input.blur() }
    else if (e.key === 'Enter' && selected >= 0) { e.preventDefault(); links()[selected]?.click() }
  })
  document.addEventListener('click', (e) => { if (!form.contains(e.target)) close() })
  form.addEventListener('focusout', (e) => { if (!form.contains(e.relatedTarget)) close() })

  // "/" jumps to search, unless someone is typing somewhere already.
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
    const t = e.target
    if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return
    e.preventDefault()
    input.focus()
  })
}

// Full results page.
const pageInput = document.querySelector('[data-search-page-input]')
const pageList = document.querySelector('[data-search-list]')
const pageCount = document.querySelector('[data-search-count]')
const pageEmpty = document.querySelector('[data-search-empty]')
if (pageInput && pageList && pageCount && pageEmpty) {
  const q = new URLSearchParams(location.search).get('q')?.trim() || ''
  pageInput.value = q
  if (input) input.value = q
  if (q) {
    document.title = `“${q}” · ${document.title}`
    pageCount.textContent = 'Searching…'
    loadIndex().then((pages) => {
      const words = terms(q)
      const hits = search(pages, q)
      pageCount.textContent = hits.length ? `${hits.length} ${hits.length === 1 ? 'guide matches' : 'guides match'} “${q}”.` : ''
      pageEmpty.hidden = hits.length > 0
      pageList.replaceChildren(...hits.map((hit) => el('li', {}, el('a', { href: hitURL(hit) },
        el('span', { class: 'search-hit-title' }, hit.page.title),
        el('span', { class: 'search-hit-path' }, hitPath(hit)),
        el('span', { class: 'search-hit-text' }, snippet(hit.page, words))))))
    }).catch(() => {
      pageCount.textContent = 'Search is unavailable right now. Reload the page to try again.'
    })
  } else {
    pageInput.focus()
  }
}
