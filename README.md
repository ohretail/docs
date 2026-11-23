<img src="static/favicon.svg" width="64" height="64" alt="">

# Oh! Retail Help

Customer guides for Oh! Retail apps, published at **https://docs.ohretail.com**.
This repository is also where customers ask questions
([Discussions](https://github.com/ohretail/docs/discussions)) and report
problems ([Issues](https://github.com/ohretail/docs/issues)) for every Oh!
Retail app.

Built with [Hugo](https://gohugo.io) and served from Cloudflare as a
static-assets-only Worker. No theme or Hugo module: the templates in `layouts/`
are the whole design.

## Develop

Requires Hugo 0.160 or later (the standard edition is enough) and Node.js 24.

```sh
npm ci
npm run dev        # http://localhost:1313, rebuilds as you edit
npm run check      # production build, then check every internal link
npm run preview    # serve the production build through Wrangler, with _headers
```

`npm run build` fails on any Hugo warning, on a Markdown link to a page that
doesn't exist, and on a screenshot without alt text.

## Deploy

Merging to `main` runs the [Site workflow](.github/workflows/site.yml). It
builds with a checksum-verified Hugo, checks links, then runs `wrangler deploy`
to the `ohretail-docs` Worker on the `docs.ohretail.com` custom domain. Pull
requests run only the build and link check.

One-time setup in GitHub:

- Repository variable `CLOUDFLARE_ACCOUNT_ID`.
- A `production` environment, limited to the `main` branch, holding the secret
  `CLOUDFLARE_API_TOKEN`. Scope the token to **Workers Scripts: Edit** on the
  account and **Zone: Read** and **Workers Routes: Edit** on `ohretail.com`.
  [Cloudflare's GitHub Actions guide](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)

The first deploy creates the Worker and its custom domain. `workers_dev` and
preview URLs are off, so the site is only reachable at `docs.ohretail.com`.

## Write a guide

Guides live in `content/`, one Markdown file per page. Each section
(`content/pos/`, `content/pos/local-register/`) has an `_index.md` and appears
in the side menu, ordered by `weight`.

```yaml
---
title: Install a register
linkTitle: Install a register   # optional, shorter name for menus
description: One sentence. Shown under the title, on cards, and in search.
weight: 10
status: pilot                   # available | pilot | sandbox
---
```

Writing style:

- Write for a store owner or cashier, not a developer. Say what to tap, in the
  order they tap it.
- Put on-screen labels in **bold**, exactly as the app spells them.
- A top-level numbered list renders as numbered steps. Use it for procedures.
- Mark each feature's status honestly, matching
  [ohretail.com](https://ohretail.com).
- Link to other guides by file, such as `[Install a register](local-register/install.md)`.
  The build resolves the link and fails if the page is missing.
- Never include real store data, credentials, or customer details in text or
  screenshots.

Shortcodes:

```markdown
{{</* callout warning */>}}Markdown here.{{</* /callout */>}}
{{</* callout type="tip" title="Moving from another system?" */>}}…{{</* /callout */>}}
{{</* shot name="pos-register" alt="What the screenshot shows" caption="Optional." */>}}
Press {{</* kbd "Enter" */>}}.
```

Callout types are `note`, `tip`, `warning`, and `danger`. `shot` expects
`static/img/NAME-800.webp` and `static/img/NAME-1600.webp`, at 16:10. Raw HTML
in Markdown is turned off.

## Look and feel

Colours, logos, and faces come from
[ohretail/assets](https://github.com/ohretail/assets/tree/7480913ce65800a5202b076b72e1c575933ecff4):

- `assets/css/tokens.css` is that commit's `colors/tokens.css`, unchanged.
  Update it by copying the file again, not by editing it here.
- `static/brand/wordmark-*.svg` and `static/favicon.svg` are the happy-eyed
  (`e2-happy`) wordmark and icon. `face-wide.svg` (404 page) and
  `face-brows.svg` (no search results) follow the "faces are for moments" rule.

The type matches ohretail.com: Archivo for text and IBM Plex Mono for code, both
self-hosted under the SIL Open Font License (`static/fonts/`). The screenshots
in `static/img/` are the same disposable-data captures used on ohretail.com.

Search runs in the browser over `/index.json`, which Hugo builds from every
page. Pages work without JavaScript. The Content-Security-Policy in
`static/_headers` allows no inline scripts or styles, so keep both in
`assets/`.

## Issues and discussions

`.github/ISSUE_TEMPLATE/` holds the forms for problem reports and guide fixes;
blank issues are off, and the chooser sends questions and ideas to Discussions.
`.github/DISCUSSION_TEMPLATE/` holds forms for the **Q&A** and **Ideas**
discussion categories. Turn on Discussions and private vulnerability reporting
in the repository settings for these links to work.
