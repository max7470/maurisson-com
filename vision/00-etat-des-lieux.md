# 🏠 maurisson.com — État des lieux complet (2026-06-11)

> Inspection intégrale du repo (44 commits relus, composants cartographiés), de la prod Coolify
> et du live. Pendant du `vision/` Music Hub / Green Hub / Idées. Couvre **les deux pages** :
> la home portail (« Le monde de Maurisson ») et la page Airbnb (`/room`).

## 1 · Photo d'ensemble

| Axe | État |
|---|---|
| Prod | https://maurisson.com (+ www → non-www), Coolify `p10mhc11wuyiaavku13936q8`, repo `max7470/maurisson-com` |
| Pages | **12 HTML au build** : 3 routes (`/`, `/room`, `/legal`) × 4 langues (FR/NL/EN/DE), sitemap + hreflang |
| Stack | Astro 6.1.8 static, CSS vanilla design tokens, zéro framework JS, build ~7 s |
| Analytics | GA4 `G-56YBF3Q9FN` (compte Maurisson, migré 17/05) — cross-subdomain `.maurisson.com` |
| SEO | Canonical absolu, og:image JPG 1200×630, JSON-LD BedAndBreakfast 4,91/62, robots+sitemap OK |
| Contact | `contact@maurisson.com` (Cloudflare Email Routing → Gmail) ; numéro perso retiré partout ✅ |
| Volume | ~15 composants Astro, `ui.ts` ~700 lignes (4 langues), `legal.ts`, `reviews.ts` (9 avis + stats) |

## 2 · 🔴 Découverte majeure : l'auto-deploy était mort depuis 17 jours

La prod servait encore le build du **25/05 08:50** (commit `c4a6df0`). Le commit suivant
`34981d4` (25/05 12:08 — **rename repo `maurisson-airbnb` → `maurisson-com` + pivot home
« le hub de Maxime »**) n'a **jamais été déployé** : le webhook GitHub App n'a plus rien
déclenché après le rename. Personne ne s'en est aperçu car le site restait en ligne, juste figé.

Réparé ce 11/06 :
- remote local XPS recâblé sur `maurisson-com.git` (le ⏳ de la mémoire, soldé)
- WIP perf retrouvé sur XPS, mergé proprement (conflit `meta.home.*` résolu en faveur du
  pivot commité) et poussé → `c61a10a`
- deploy **manuel** déclenché via MCP Coolify (le webhook reste à re-tester au prochain push —
  cf. S1 de la vision)

## 3 · Histoire du repo (3 vagues puis silence)

- **14–17/05 — lancement** : refonte home bento « Le monde de Maurisson », SEO complet,
  GA4, pages `/legal` × 4 langues, badge Guest Favourite laurels, polish mobile (~35 commits)
- **19/05** : favicon M italique sur disque terracotta
- **25/05 — living warmth** : aurora/beam/shimmer/spotlight curseur, showcase Music Hub
  3 screenshots cross-fade, perf GPU, puis **pivot éditorial** : la home n'est plus une annonce
  Airbnb avec des bonus, c'est **le hub de Maxime** (Music, Green, Productions, Idées) avec une
  maison où l'on peut dormir. Meta titles réécrits dans ce sens (4 langues).
- **26/05 → 11/06** : rien (et pour cause, le deploy était cassé).

## 4 · Les deux pages, telles qu'elles sont

**Home `/`** — bento : Music Hub (wide, showcase cross-fade) → carte Airbnb/room (badge laurel
compact) → Green Hub (wide) → Productions + Manuels (cards) → footer fineprint + `/legal`.
Effets « lumière vivante » (aurora, spotlight cursor) conformes au principe *lumière, pas photos*.

**Room `/room`** — Hero plein écran (badge laurels cliquable → URL directe des avis Airbnb) +
Intro + Room + House + Region (Maastricht/Aachen/Spa/Liège) + Host + Gallery (13 AVIF) +
Reviews (9 avis, stats par catégorie) + Amenities + CTA (Airbnb + mailto).

## 5 · Audit — dette & risques (par ordre d'importance)

1. 🔴 **Auto-deploy à re-valider** : un push de contrôle doit faire bouger `Last-Modified`.
   Sinon, recâbler la GitHub App `maurisson-github` sur le repo renommé dans Coolify.
2. 🟠 **Données figées qui dérivent** : `stats = 4,91 / 62 avis` (hardcodé en **3 endroits** :
   `reviews.ts`, `hero.rating`/`reviews.title` × 4 langues dans `ui.ts`, JSON-LD BaseLayout) +
   `MUSIC_COUNT = 2334`, `GREEN_COUNT = 38`. Tout date de mi-mai. Airbnb bloque le scraping
   anonyme (403) → la sync restera un geste manuel à ritualiser.
3. 🟡 **Pas de page 404** : aucune `src/pages/404.astro` → nginx sert sa page par défaut, hors
   charte. Une page aux tokens Maurisson = 30 min.
4. 🟡 **Headers HTTP nus** : pas de HSTS/CSP/X-Frame-Options, `Content-Type` sans charset,
   Cloudflare en DNS-only (pas de proxy/WAF). Acceptable pour un site statique, à durcir un jour
   via labels Traefik (UI Coolify).
5. 🟡 **Skill `maurisson-site` périmé** : il dit encore GA4 `G-ZL0LY1LPJK`, 8 pages, repo
   `maurisson-airbnb`, buildpack `static` (réel : nixpacks + nginx). À rafraîchir.
6. ⚪ **`vitrine/` legacy** toujours dans le dossier parent — ne pas toucher, mais candidat archive.
7. ⚪ Avis « Mart » mentionne Sushi le chat — le chat a été retiré de Host volontairement ;
   l'avis peut rester (c'est un témoignage), simple note de cohérence.

## 6 · Ce qui est sain (à préserver)

- Zéro dépendance runtime JS, build 7 s, 12 pages statiques — la simplicité EST la robustesse.
- i18n discipliné : 1 fichier `ui.ts`, helpers de routing, 4 langues toujours synchrones.
- SEO carré dès le lancement (canonical, hreflang, og:image JPG, JSON-LD).
- Les pièges connus (og AVIF, meta vide, chezmaurisson, WhatsApp) : **tous vérifiés absents** ce 11/06.
