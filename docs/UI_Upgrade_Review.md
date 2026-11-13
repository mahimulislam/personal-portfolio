# Portfolio UI upgrade review

Reviewed November 13, 2026. Local implementation and browser verification; no deployment.

## Result

The existing React/Vite application keeps its routes, project content, portrait captions, and contact behavior. The visual update retains the cream and rust identity, adds a forest-green interactive hero panel, improves typography and contrast, removes decorative tilts from the hero and portrait, and makes project controls easier to use. The mobile menu uses the existing Radix Sheet, with focus containment, Escape handling, scroll locking, and focus restoration. Experience and Certifications are now reachable through mobile navigation and the footer.

The portrait is approximately 170 KB instead of 2.1 MB, with a separate 3.4 KB avatar. Contact fields use 16px text, and filters and secondary actions have larger tap targets. Keyboard focus scrolls immediately into view.

Taste Skill supplied the visual direction and inspection tools. Humanizer supplied the writing guidance. gstack's headless browser supplied rendered verification after Taste's separate layout checker crashed. The React checklist was consulted for hooks, cleanup, accessible controls, and existing-component reuse. No dependencies or tools were installed or upgraded.

## Verification

| Check | Result |
| --- | --- |
| `npm run build` | Pass; tracked `dist` output regenerated |
| `npm run lint` | Zero errors; seven existing Fast Refresh warnings |
| `npx tsc --noEmit -p tsconfig.app.json` | Pass |
| `git diff --check` | Pass |
| Route layouts | Eight routes × six widths = 48 checks; no overflow, offscreen checked controls, duplicate h1, or broken images |
| Widths | 1440, 1024, 820, 768, 390, and 320px |
| Production preview | All eight routes render, including the 404 page |
| Interaction flows | Seven checks passed: menu keyboard handling, menu navigation, practice modes, project filters/details, certification search recovery, form validity, and project fragment navigation |
| Keyboard navigation | 35 Tab stops checked; zero invisible stops after fixing smooth-scroll interference |
| Production performance | Taste `perf.mjs dist --runs 1`, desktop and mobile; zero budget failures, three warnings |

The performance run measured about 353 KB transferred after scrolling through the homepage, including images and fonts. Its warnings concern three font families and the portrait resolution on mobile. This is a local single-sample lab result, not a production Core Web Vitals measurement. An earlier run against `dist/index.html` rendered the application's 404 route; those figures were discarded. Development-server transfer figures were also excluded from the production result.

No email was sent. Form validation was exercised locally. External social links, publication availability, real mail-client handoff, screen-reader output, and hosted deployment behavior were not independently verified. The formal gstack pre-landing branch review stops on `main`; this report does not claim its adversarial review completed.

## Dependency findings

`npm audit --omit=dev` reports 14 advisories: 12 high and two moderate. They remain unresolved. Severity is the registry classification, not a claim that each issue is exploitable in this static portfolio. Dependency upgrades, including Zod's proposed major-version change, were kept out of this UI pass.

| Package | Severity | Dependency |
| --- | --- | --- |
| `@remix-run/router` | high | Transitive |
| `brace-expansion` | high | Transitive |
| `glob` | high | Transitive |
| `lodash` | high | Transitive |
| `minimatch` | high | Transitive |
| `nanoid` | high | Transitive |
| `picomatch` | high | Transitive |
| `postcss` | high | Direct |
| `postcss-selector-parser` | moderate | Transitive |
| `react-router` | high | Transitive |
| `react-router-dom` | high | Direct |
| `source-map-js` | high | Transitive |
| `yaml` | moderate | Transitive |
| `zod` | high | Direct |

## Taste finish gate

`GATE: OPEN 32 (rounds used up)`

The gate is not a clean pass. Its remaining findings are listed below without waivers. Several enforce the skill's specific starter structure: `.wrap`, fixed screen-height sections, mandatory dealt moments, and no image captions. This existing portfolio retains its React layout, variable-height content, actual paper titles, useful captions, and functional diagrams. The gate also interprets diagram-node positions as staggered text and geometric artwork as tilted layout. Those findings are not hidden or marked fixed.

The separate `assets/layout/check.mjs` run crashed with `TypeError: r.sections is not iterable`; it did not pass. The 48 browser layout checks above supplied independent evidence for the actual application.

Design choices: personal portfolio treated as service; existing cream/rust colors, forest-green panel, DM Sans / Instrument Serif / IBM Plex Mono; no shader, external stock photography, invented credentials, or assumed contact details. Hero entrance and hover feedback honor reduced motion. A mandatory stock scroll moment was not added. Copy keeps the owner's first-person voice and supplied facts. No name was coined and no client assets are pending.

### Remaining gate findings (32)

| Check | Target | Finding |
| --- | --- | --- |
| `nav` | div.site-shell > header.site-header > div.nav-inner.page-width > a.wordmark "mi. MAHIMUL ISLAM ENGINEER & AI RESEARCH" | nav link wraps to a second line |
| `no-visual` | section#selected-work "Selected systems, built for people." | no picture, effect or mock in this section; a feature section needs a visual |
| `no-visual` | section#research "What if AI could think about its thinkin" | no picture, effect or mock in this section; a feature section needs a visual |
| `cta` | main#main > section.contact-band "04 / THE NEXT CONVERSATION Have a proble" | the last section before the footer ends with no button |
| `copy-headings` | article#maeknit > h3 "Connecting the factory floor." | "Connecting the factory floor." names no product, part, place or section (7 headings like it; at most one brand line per page) (and 6 more like it: "Expert knowledge. New po", "Teaching agents to think", "A Metacognitive Architec", "Correcting LLM Errors: A", ...) |
| `heading-scale` | article#maeknit > h3 "Connecting the factory floor." | h3 headings in 2 sizes, 21px ("A Metacognitive Architec") to 30px (x1.43) |
| `stagger` | section.hero.page-width > div.hero-grid > div.system-map > div.map-drawing.map-mode-0 "INTERFACE PLATFORM OPERATIONS SOFTWARE W" | 3 rows start at 3 different left offsets (+0, +213, +385px) |
| `tilt` | button.work-art-button > div.project-art.art-systems > div.portal-diagram > i | rotated -12.0° (and 1 more like it: "KNOWLEDGE, WOVEN IN.") |
| `tilt` | button.work-art-button > div.project-art.art-agent > div.agent-diagram > div.agent-orbit | skewed -11.0° |
| `visual-caption` | section.section.page-width:nth-of-type(4) > div.about-grid > figure.portrait > figcaption "MAHIMUL ISLAM / NEW YORK CITY" | a figcaption under the picture mahimul-portrait.jpg: "MAHIMUL ISLAM / NEW YORK CITY"; no caption or description under any image, render or visual (house rule) |
| `hero-enter` | main#main > section.hero.page-width | the hero does not enter on load: no data-enter on the hero and no head line setting html.m-enter (motion.md, The hero's entrance) |
| `moment-none` | (the page) | a service page (--type) deals no moment: every kind carries one, two on a long page (moments.md) |
| `section-height` | main#main > div.practice-strip "EXPERIENCE, IN PRACTICE6+YEARS BUILDING " | the section is 114px tall (0.1 screens), 786px short of one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2) |
| `section-height` | div#root > div.site-shell > footer.site-footer "Mahimul IslamBuilt with thought. Made fo" | the section is 280px tall (0.3 screens), 620px short of one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2) |
| `section-height` | section#selected-work "01 SELECTED WORKSelected systems,built f" | the section starts at 1015px, 115px below the screen grid (1 x 900px): sections start on whole screens (and 3 more like it: "SOFTWARE ENGINEERING & A", "04 / THE NEXT CONVERSATI", "02 RESEARCH & CURIOSITYW") (SR-2) |
| `section-air` | main#main > div.practice-strip "EXPERIENCE, IN PRACTICE6+YEARS BUILDING " | the content fills 39.4% of the section's height (45 of 114px): 55% or more (40% WARN) (SR-3) |
| `section-air` | section#selected-work > a.text-link.all-work "Explore the full collection" | a top border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (SR-3) |
| `one-section` | div#root > div.site-shell > footer.site-footer "Mahimul IslamBuilt with thought. Made fo" | the screen at scroll 4314px (the top of section 6) shows 280px of section 7 and the content of 2 sections, over 24px each beside section 6: a screen shows one section (another may peek 8px, 24px WARN) (SR-4) |
| `one-section` | main#main > section.section.page-width:nth-of-type(4) "03 THE PERSON BEHIND THE WORKCurious by " | the screen at scroll 2702px (the top of section 4) shows 137px of section 5 beside section 4: a screen shows one section (another may peek 8px, 24px WARN) (SR-4) |
| `one-heading` | section.section.page-width:nth-of-type(4) > header.section-heading > div.section-heading-row > h2 "Curious by nature.Hands-on by choice." | headings of two sections show whole on one screen at 4 of 87 scroll positions (4.6%; at scroll 2850, 2900, 2950, 3000px), here with "11,000+": at most 3% on a desktop (SR-5) |
| `container-edges` | div#root "Skip to contentmi.MAHIMUL ISLAMENGINEER " | a <div> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6) |
| `container-edges` | main#main > section.hero.page-width "SOFTWARE ENGINEERING & APPLIED AINEW YOR" | the section needs exactly one in-flow child .wrap (it has 2 in-flow children, 0 .wrap) (SR-6) |
| `container-edges` | main#main > div.practice-strip "EXPERIENCE, IN PRACTICE6+YEARS BUILDING " | the section needs exactly one in-flow child .wrap (it has 1 in-flow child, 0 .wrap) (and 5 more like it: "01 SELECTED WORKSelected", "02 RESEARCH & CURIOSITYW", "03 THE PERSON BEHIND THE") (SR-6) |
| `container-edges` | section.section.page-width:nth-of-type(4) > div.about-grid > div.about-copy > p.large-copy "I like the space where a complex problem" | 7 text blocks start on a left line at x 696, 616px from the container's left: text starts on the container's left, or on one split line (x 623, 732, 841) (also "Over 6+ years, I’ve built produc", "I hold an M.S. in Computer Scien", "Interfaces") (SR-6) |
| `container-edges` | div.hero-grid > div.hero-copy > div.hero-signoff > span "CURRENTLY BUILDING AT MAEKNITM.S. COMPUT" | 1 text block starts on a left line at x 137, 57px from the container's left: text starts on the container's left, or on one split line (x 623, 732, 841) (SR-6) |
| `container-edges` | div.page-width > div.research-feature-grid > div.paper-list > a.paper-preview:nth-of-type(2) "Jan 2026 / ToM4AICorrecting LLM Errors: " | a box over half the container wide runs 682-1360px, not on the container's lines at 80-1360px (SR-6) |
| `container-edges` | div.page-width > div.research-feature-grid > div.paper-list > a.paper-preview:nth-of-type(3) "May 2025 / ToM4AIAdaptable Social AI Age" | a box over half the container wide runs 682-1360px, not on the container's lines at 80-1360px (SR-6) |
| `split-pair` | main#main > section.hero.page-width > div.hero-grid "Software.Intelligence.A human touch.I’m " | the two columns of the split start 45px apart at the top (centred on each other): a split's columns are top-aligned, 8px either way (SR-8) |
| `split-pair` | main#main > section.section.page-width:nth-of-type(4) > div.about-grid "MAHIMUL ISLAM / NEW YORK CITYmi.I like t" | the split's left column starts with a picture or a box, not text: text left, the visual right, on every split (SR-8) |
| `heading-scale` | div.research-feature-grid > div.research-aside > div.research-stat > strong "11,000+" | the figure "11,000+" is set at 57px, larger than the h1 (51.8px) |
| `hero-fill` | main#main > div.practice-strip "6+ YEARS BUILDING SOFTWARE 4 INDUSTRIES," | the next section shows on the first screen: it starts at 893px on a 1024px screen (the hero ends at 893px) |
| `container` | page | no .wrap |

No waivers were applied. Detailed machine output remains in the ignored `.taste-skill/` folder.
