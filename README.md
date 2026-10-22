# Helixona Hub

A single page that lists the Helixona systems running on AWS and the mockups. Plain HTML, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page (layout, styles, search). Rarely needs changes. |
| `systems.js` | **The list of systems.** Edit this to add, remove or reorder cards. |
| `logo-on-dark.png`, `favicon.svg` | Brand assets. |

## Adding a system

Open `systems.js` and add an entry inside the right group:

```js
{
  name: "Name shown on the card",
  icon: "bot",               // app | phone | bot | card | form | clinic | code | grid
  description: "One sentence about what it does.",
  url: "https://…",          // leave "" for a placeholder
  status: "live",            // live | internal | soon
  tags: ["ops"],             // optional
  links: [{ label: "Sub-page", url: "https://…" }],   // optional quick links
}
```

Save, commit, push to `main`. GitHub Pages publishes the `main` branch directly (Settings → Pages → Deploy from a branch, `main`, root). The site updates in about a minute.

## Pointing bot.helixona.com at this site (on hold)

Do this once, in two places. The DNS for helixona.com is managed in GoDaddy (nameservers ns71/ns72.domaincontrol.com), not in cPanel.

**1. DNS (where helixona.com is managed, e.g. GoDaddy, Cloudflare, Squarespace):**

| Type | Host / Name | Value / Target | TTL |
|---|---|---|---|
| CNAME | `bot` | `crpozo.github.io` | default |

If the DNS is on Cloudflare, set the record to **DNS only** (grey cloud) so GitHub can issue the certificate.

**2. GitHub:** repository **Settings → Pages**:
- Source: **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`. GitHub sets this itself the first time the `gh-pages` branch exists.
- Custom domain: `bot.helixona.com` → Save. Then add `cname: bot.helixona.com` under `with:` in `.github/workflows/deploy-pages.yml` so the setting survives future deploys. GitHub checks the DNS record (can take a few minutes after the DNS change).
- Tick **Enforce HTTPS** once the check passes.

The hub is live at **https://crpozo.github.io/helixona-main/**. The custom domain is on hold until someone with access to the GoDaddy account for helixona.com can add the record below.

## Local preview

Open `index.html` in a browser, or run `npx serve .` in this folder.
