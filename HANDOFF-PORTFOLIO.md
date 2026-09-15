# Handoff — completing the portfolio cards

For the next Claude Code session, which has access to **all** the product
repositories. This one only had `OolalaDXB/TheStudioMT` plus a read clone of
`OolalaDXB/bawaba-command`, and that limit is the whole reason this file exists.

Branch: `claude/sleepy-bardeen-4uwe0w`. Develop there, push there.

---

## 1. What the portfolio is

One page, one data file. Every card on the site is an object in the
`categories` array of `src/components/studio/Portfolio.tsx`:

```ts
interface Venture {
  name, description, execution, detail   // copy
  capabilities?: string[]                 // the module list, rendered in the sheet
  image, imagePosition?, splitImages?, gallery?, stackedImages?, splitPortrait?
  url?, urlTitle?, secondaryUrl?, secondaryTitle?
  badge?                                  // status pill
}
```

`description` and `execution` show on the card. `detail` and `capabilities`
show in the detail sheet, which opens on card click or on the `i` button.
`VentureCard.tsx` renders all of it; you should rarely need to touch it.

## 2. The one rule

**Never invent a feature.** This is a real portfolio for a real person, on a
public site, describing systems that clients and investors can check. A
plausible-sounding module that does not exist is worse than a thin card.

Every claim must trace to something you have read: the product's source, its
migrations, its README, or copy the owner wrote himself. When you cannot
verify, say so in your summary rather than writing around it.

## 3. What has been done, and how

`detail` now carries one argument per card; `capabilities` carries the module
inventory. All 14 cards have both.

The copy was reconstructed from **this repository's own git history** — earlier
versions of each description were far richer than what was live, and successive
rewrites had thinned them out. Recover them with:

```bash
git log --all -p -- src/components/studio/Portfolio.tsx | less
# or, per venture, diff a February commit against HEAD
git show 8be140f:src/components/studio/Portfolio.tsx
git show 153f853:src/components/studio/Portfolio.tsx
```

That was the best source available without the product repos. **You have the
product repos. Verify against source, and prefer source over prose.**

Bawaba shows why this matters. Its card claimed an eight-stage pipeline of
`parse → auth → rate limit → policy → tokenize → route → execute → audit`.
The actual pipeline, in `internal/proxy/proxy.go`, is numbered `Step 1`..`Step 8`
and reads `authenticate → rate limit → policy → tokenise → sovereign route →
execute → de-tokenise → audit`. Parse is not a stage; **de-tokenise** is, and it
had been dropped from the copy entirely. Reading the source both corrected the
order and recovered a stage worth naming.

## 4. Per-card status

| Card | Copy verified against source? | Where to look |
|---|---|---|
| Bawaba | **Yes** — `OolalaDXB/bawaba-command` | done; see §5 for what is still open |
| Sillon | No | find the repo; card claims 135 tables, 221 db functions, 41 edge functions |
| Maisons.co | No | card claims 76 tables, 125 db functions, 27 edge functions |
| Coach Gari | No | card claims 47 tables, 330 db functions, 19 edge functions, 16 pgTAP suites |
| RLS Guard | No | `OolalaDXB/rls-guard`; four invariants + evidence report are checkable |
| BEAU | No | Zero Access, Faraid shares, Dead Man Switch all unverified |
| BEAU Treasury | n/a | in development — see the constraint in §6 |
| MyOolala | No | per-view QR + Wallet pass, Stripe tipping/shop/donations |
| Les Vieilles Pierres | No | admin tabs, Souffleur IA, Resend, Plausible |
| District 267, PandaMood, padel.design | n/a | not software; figures come from the owner |
| Oolala Social, Live Great | n/a | not software; see the image note in §7 |

Repository names above are guesses except where stated. Call `list_repos`
first and map them properly — do not assume a name.

## 5. Tasks

1. **Confirm the counts.** Every "N tables, N database functions, N edge
   functions" on a card is unverified. Count them for real:
   ```bash
   ls supabase/migrations | wc -l
   ls supabase/functions | wc -l
   grep -rc "create table" supabase/migrations | ...
   ```
   A number that has drifted should be corrected, not quietly dropped — these
   figures are the cards' strongest argument.

2. **Recover modules the copy misses.** Bawaba gained SIEM export and
   seven-year retention (`configs/bawaba.yaml`: `retention_days: 2555`) only
   because the config was read. Expect the same in every repo: a migrations
   directory and an edge-functions directory are a feature list nobody wrote
   down. Cross-check each card's `capabilities` against them.

3. **Flag claims the source contradicts.** Report them; do not silently soften
   a claim the owner may be able to substantiate another way.

4. **Watch for aspirational code.** In Bawaba, `MerkleRoot` is present in the
   audit struct but marked `TODO P2` — so the card says hash chain and Ed25519
   signature, which are implemented, and says nothing about Merkle windows,
   which are not. Apply that test everywhere: shipped, or not mentioned.

## 6. Constraints — these are settled decisions, do not relitigate

- **English only.** `index.html` declares `lang="en"`, `og:locale=en_US`.
  Badges, `title` attributes and `aria-label`s included. A French string in the
  UI is a bug; an earlier pass removed all of them.
- **No client names.** Deliberate, repo-wide. Sillon's pilot distributor and
  Live Great's director were both removed on purpose. Do not restore them.
- **No named competitors.** "Kyriba or ION" was removed from BEAU Treasury at
  the owner's instruction; it now reads "an enterprise TMS". Keep it that way.
- **Infrastructure operators are fine, and are named.** Bawaba names Inwi DC
  Casablanca, STC Cloud Riyadh, G42 Abu Dhabi and Hetzner Frankfurt with their
  compliance regimes, at the owner's instruction, and they are real values in
  `configs/bawaba.yaml` under `routing.rules`.
- **No preview or dev URLs.** A `*.vercel.app` dev deployment was linked from
  BEAU and has been removed; Sillon's demo link was dropped earlier for landing
  on an auth wall. Public, stable URLs only.
- **Bawaba does not link to its source and does not claim to be open source.**
  Both removed at the owner's instruction. Note the repo *is* public — but it
  carries **no LICENSE file**, so "open source" would be inaccurate anyway:
  absent a licence, a public repo is copyright-reserved by default. If a licence
  is ever added, that decision can be revisited with the owner.
- **Status vocabulary in use:** `Live`, `In development`, `Prototype`,
  `Private beta`, `On hold`, `Dossier on request`, `v1.0.0 · download`.
  A card with nothing to declare carries no badge.
- **Do not overclaim an unshipped product.** BEAU Treasury is badged
  `In development` and its own text says the modules are the scope being built.
  Preserve that honesty if you touch it.

## 7. Known open items

- **Oolala Social Foundation** is the only card whose image is a remote Unsplash
  stock photo rather than a local screenshot. It is both visually off and an
  external network dependency on the page. Needs a real asset from the owner.
- **Oolala Social Foundation** is also the only card with no `url` and no badge.
- **BEAU's two arrows point at the same page** — `beau.capital` and a
  `#:~:text=` text fragment aimed at its "Request a demo" call. Text fragments
  are ignored by Firefox, which lands on the top of the homepage instead. If
  beau.capital has a real anchor or a dedicated page, swap it in.

## 8. Before you push

```bash
npm ci
npm run build                                   # must pass
npx eslint src/components/studio/Portfolio.tsx  # must be clean
npx tsc --noEmit -p tsconfig.app.json           # must be clean
```

Then look at it. `npx vite preview --port 4173 --host 127.0.0.1` — bind to
`127.0.0.1`, the default dual-stack bind fails in this sandbox with
`EAFNOSUPPORT`. Chromium is at `/opt/pw-browsers/chromium`; drive it with
Playwright, open each sheet, and check the copy renders and the module grid is
not lopsided. Screenshots at 1280x900 and 390x844.

Two rendering facts worth knowing before you debug either:

- The detail sheet and the lightbox are rendered into `<body>` via
  `createPortal`. They must be. Each category section wraps its grid in a
  `relative z-10` container, which is its own stacking context, so a sheet
  rendered in place is painted under the *next* section no matter how high its
  z-index. Do not "simplify" the portal away.
- The status pill is rendered once, on a wrapper around all three image
  layouts, and is `pointer-events-none` so a click passes through to the
  lightbox beneath. It used to live inside the single-image branch, which is
  why six cards showed no status at all.
