// Checks every same-site link, image, and #fragment in the built site.
// Usage: node scripts/check-links.mjs public
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative, resolve, dirname, sep } from 'node:path'

const root = resolve(process.argv[2] || 'public')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

const exists = async (p) => stat(p).then((s) => s, () => null)

// Map a site path to the file Cloudflare would serve for it.
async function target(pathname) {
  const p = join(root, decodeURIComponent(pathname))
  if (!p.startsWith(root)) return null
  const s = await exists(p)
  if (s?.isFile()) return p
  if (s?.isDirectory() && (await exists(join(p, 'index.html')))) return join(p, 'index.html')
  if (await exists(`${p}.html`)) return `${p}.html`
  return null
}

const ids = new Map()
const idsOf = async (file) => {
  if (!ids.has(file)) {
    const html = await readFile(file, 'utf8')
    ids.set(file, new Set([...html.matchAll(/\sid=["']?([^"'\s>]+)/g)].map((m) => m[1])))
  }
  return ids.get(file)
}

const problems = []
let checked = 0
for await (const file of walk(root)) {
  if (!file.endsWith('.html')) continue
  const html = await readFile(file, 'utf8')
  const page = '/' + relative(root, file).split(sep).join('/')
  const refs = []
  for (const m of html.matchAll(/\s(?:href|src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) refs.push(m[1] ?? m[2] ?? m[3])
  for (const m of html.matchAll(/\ssrcset=(?:"([^"]*)"|'([^']*)')/g)) {
    for (const part of (m[1] ?? m[2]).split(',')) refs.push(part.trim().split(/\s+/)[0])
  }
  for (const ref of refs) {
    if (!ref || /^(?:[a-z]+:|\/\/)/i.test(ref)) continue
    checked++
    const url = new URL(ref.replaceAll('&amp;', '&'), `https://site.invalid${page}`)
    const dest = await target(url.pathname)
    if (!dest) {
      problems.push(`${page}: ${ref} does not exist`)
      continue
    }
    const frag = decodeURIComponent(url.hash.slice(1))
    if (frag && dest.endsWith('.html') && !(await idsOf(dest)).has(frag)) {
      problems.push(`${page}: ${ref} has no #${frag} target`)
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'))
  console.error(`\n${problems.length} broken link(s).`)
  process.exit(1)
}
console.log(`Checked ${checked} links in ${relative(process.cwd(), root) || '.'}: all good.`)
