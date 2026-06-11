# 🔮 maurisson.com — Vision & futur (2026-06-11)

> Pendant du `vision/` Music Hub / Green Hub / Idées. Ambition : passer de la **belle vitrine
> figée** au **portail vivant** — un site qui reste vrai sans qu'on y pense, qui convertit les
> voyageurs, et qui raconte ce qui se passe chez Maurisson cette semaine, pas mi-mai.
> Découpé en saisons S1→S5, chacune livrable indépendamment.

## Le fil rouge

Le site est statique par design (et c'est sa force), mais ses **chiffres sont des mensonges
lents** : 62 avis, 2 334 morceaux, 38 plantes — tout date de mi-mai et dérive chaque semaine.
La matière fraîche existe déjà (API Music Hub, API Green Hub, annonce Airbnb) ; il suffit de la
brancher **au moment du build**, pas au runtime. Un site statique peut être vivant s'il rebuild.

## S1 — Consolidation (1 soirée, à faire d'abord)

Solder l'audit de `00-etat-des-lieux.md` :

- [ ] **Valider l'auto-deploy** : push de contrôle → `Last-Modified` doit bouger sous 2 min.
      Sinon recâbler la GitHub App `maurisson-github` sur `maurisson-com` dans Coolify.
- [ ] **Page 404** aux couleurs Maurisson (`src/pages/404.astro` × 4 langues, ton léger).
- [ ] **Refresh des chiffres** : count avis Airbnb réel (3 endroits synchrones !), `MUSIC_COUNT`,
      `GREEN_COUNT` — et noter la date du dernier sync en commentaire dans `ui.ts`.
- [ ] **Rafraîchir le skill `maurisson-site`** (GA4 `G-56YBF3Q9FN`, 12 pages, repo
      `maurisson-com`, nixpacks, pages legal, pivot éditorial).
- [ ] (option) HSTS via labels Traefik dans l'UI Coolify.

## S2 — Les chiffres qui ne mentent plus ⭐ (le gros gain)

Brancher les sources au build :

- **Compteurs auto** : au `npm run build`, fetch `musichub.maurisson.com/api` (count morceaux)
  et Green Hub (count plantes) → injecte dans les cards bento. Fallback = dernière valeur connue
  (constante actuelle) si l'API ne répond pas. Zéro runtime JS ajouté.
- **Rebuild périodique** : un deploy Coolify hebdo (cron `mcp__coolify__deploy` ou scheduled
  task) suffit à garder le site frais sans toucher au code.
- **Avis Airbnb** : le scraping anonyme est bloqué (403) → rituel mensuel assisté : une session
  Claude lit l'annonce (browser MCP), met à jour les 3 endroits + ajoute les 2-3 meilleurs
  nouveaux avis dans `reviews.ts`.

## S3 — La page Airbnb qui convertit (le /room)

- **Section événements région** : Spa-Francorchamps (F1, 24H), Francofolies — les dates qui
  remplissent la chambre (matière déjà dans le skill `airbnb-mauriss`). Calée SEO :
  « logement F1 Spa-Francorchamps » est une vraie requête saisonnière.
- **FAQ voyageurs** (check-in, parking, petit-déj, animaux) en `<details>` + JSON-LD FAQPage.
- **Prochaines disponibilités** : `dashboard-maurisson` lit déjà l'iCal — exposer au build
  3-4 fenêtres libres à venir (« libre du 3 au 7 juillet ») avec CTA Airbnb. Statique, régénéré
  au rebuild hebdo de S2.
- Mini-bloc avis le plus récent dans le Hero (preuve sociale du mois, pas de 2025).

## S4 — Le portail qui raconte

- **Bloc « En ce moment chez Maurisson »** sur la home : derniers morceaux ajoutés au Music Hub,
  dernière plante/photo Green Hub, dernière gravure — 3 lignes, fetchées au build.
- **Page `/now`** (mouvement nownow.com) : ce sur quoi Maxime joue/grave/travaille — alimentée
  par une note simple, mise à jour quand ça change.
- Croiser avec GA4 : regarder ce que font les visiteurs du pivot « hub » (home → room ? home →
  Music Hub ?) avant d'investir plus dans l'un ou l'autre chemin.

## S5 — Rayonnement

- **Search Console** : vérifier l'indexation des 12 pages + requêtes réelles (jamais regardé).
- Pages langues : le NL est le marché n°1 des voyageurs (Maastricht à 20 min) — vérifier dans
  GA4 que `/nl/` reçoit, sinon petit boost SEO NL ciblé.
- OG par page : aujourd'hui une seule `og-image.jpg` globale — en générer une par route
  (`/room` mérite la chambre, pas le salon) via `make-og-image.mjs` étendu.

## Ce qu'on ne fera PAS (garde-fous)

- **Pas de nouvelles photos** hero/bento sans demande explicite de Maxime — la refonte visuelle
  passe par la lumière (aurora, shimmer, glow), c'est un principe acté.
- Pas de framework JS, pas de backend, pas de CMS — le site reste 100 % statique Astro.
- Pas de réintroduction de Sushi dans Host, pas de signature « Superhost depuis 2022 »,
  pas de numéro de téléphone perso — décisions UX actées, ne pas régresser.
- Le rituel avis reste **assisté, validé par Maxime** — on ne réécrit pas un avis, jamais.
