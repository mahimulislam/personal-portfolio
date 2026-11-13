# Portfolio redesign

Kind: service. A personal portfolio for people assessing Mahimul's engineering and AI research work. Primary action: view projects; secondary action: contact Mahimul.

Taste deal: swap-pastels palette, Albert Sans, split portrait hero, word-highlight statement. Ice-blue grounds and teal create a distinct technical identity while charcoal gives the research work contrast. Preserve the generated palette tokens. The existing application remains React/Vite with its seven routes, existing data, accessible navigation, and mailto contact flow.

Voice: first-person, specific, straightforward. Preserve official paper titles, credentials, dates, metrics, contact details, technical claims, and portrait captions. No invented availability or endorsements. All imagery is the owner's portrait; project graphics explain real workflows rather than imitate product screenshots.

## Visual contract

- Ground #c3d7e5; surface #d0e0eb; ink #141414; accent #0f5257. Neutral project surfaces and charcoal research panels provide contrast.
- Albert Sans for display and body, 400/500/600. IBM Plex Mono for compact metadata. No italic serif headings.
- Content width 1280px, 64px desktop outer spacing, 24px mobile. Spacing scale 8/12/16/24/32/48/64/96/128.
- Radius 12px on panels and 6px on controls. One primary filled button and one secondary outlined button. Visible focus rings on both light and dark surfaces.
- Hero: oversized role typography, identity and portrait, current work and education. Approximately one viewport on desktop; natural height on narrow screens.
- Selected work: large leading case study, then a two-column collection; meaningful architecture diagrams, project tags, expandable details. Natural content height preserves readability.
- Research: a dark feature section with a type-led statement moment and actual publications. Keep scrolling native.
- About: portrait and biography with a skills index and education references.
- Inner routes: unified oversized introductions; project collection, publication index, employment timeline, biography/education, searchable credentials, and a two-panel contact composition.
- Footer: oversized contact invitation, simple site index, and real social links.
- Motion: Taste's unchanged hover/entrance layer; one word-highlight moment in the research section. Reduced motion renders the complete static content. No loops, shader, parallax, or scroll-jacking.

## Implementation and verification

1. Replace the global visual system, header, footer, homepage, and project illustrations.
2. Rebuild the case study presentation and all inner page layouts using the shared system.
3. Verify filters, expandable details, navigation, search, fragment links, and contact validation.
4. Run zero-warning lint, TypeScript, production build, desktop/mobile screenshots, overflow checks at 320–1440px, and the Taste gate. Record remaining tool or template limitations rather than claiming they passed.

## Verified result

Implementation and functional verification are complete. Zero-warning lint, TypeScript, and production build passed. The browser passed 48 responsive checks, 24 production-route checks, seven interaction flows, and 35 keyboard stops. Production performance passed at desktop and mobile sizes with zero warnings. The Taste finish gate remains open with 62 starter-layout findings; see [REDESIGN_REVIEW.md](REDESIGN_REVIEW.md) for the full list and limits of verification.
