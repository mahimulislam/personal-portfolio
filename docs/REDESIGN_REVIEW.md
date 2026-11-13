# Complete portfolio redesign review

GATE: OPEN 62 (rounds used up)

Reviewed November 13, 2026. This review covers the complete redesign described in [REDESIGN.md](REDESIGN.md), replacing the earlier cream/rust visual design. No deployment was performed.

## What changed

The site now uses Taste Skill's `swap-pastels` palette, Albert Sans, a split portrait hero, and the `word-highlight` research moment. Ice blue, teal, and charcoal replace the previous colors and serif typography. The header, monogram, favicon, footer, homepage composition, project case studies, workflow illustrations, research section, and interactive practice diagram were rebuilt. The remaining routes use the new visual system: publication panels, a work timeline, biography and education layouts, searchable credential cards, and a two-panel contact form.

The portrait is the owner's existing image, with responsive JPEG sources. Project illustrations explain the workflows described in the portfolio; they are not claimed to be product screenshots. Official paper titles, qualifications, metrics, dates, technologies, contact details, and routes were preserved. The humanized first-person copy remains. No client names, endorsements, availability claims, or research results were invented.

## Verification

| Check | Evidence |
| --- | --- |
| Build | `npm run build` passed; tracked production output regenerated |
| Lint | `npm run lint -- --max-warnings 0` passed with no warnings or errors |
| TypeScript | `npx tsc --noEmit -p tsconfig.app.json` passed |
| Whitespace | `git diff --check` passed |
| Responsive layouts | Eight routes at 1440, 1024, 820, 768, 390, and 320px: 48 checks passed |
| Rendered detail checks | No horizontal overflow, broken images, Vite error overlays, or clipped project-illustration text in the checked layouts |
| Interactions | Seven checks passed: mobile menu focus/Escape/restoration, menu navigation, practice modes, project filtering and expansion, search empty-state recovery, contact validation, and research fragment navigation |
| Keyboard | 35 Tab stops checked; no invisible focus targets |
| Production routes | Eight routes at three widths: 24 checks passed against Vite's production preview |
| Route lifecycle | Navigating from home to research and back remounts the research moment correctly |
| Browser errors | No JavaScript errors in the final rendered checks |
| Performance | Taste `perf.mjs dist --runs 1` passed at 1440 and 390px with zero failures and zero warnings |

The production performance run transferred approximately 272 KB after scrolling the homepage, including its scripts, fonts, and portrait. It measured no blocking time and layout shifts of 0.009 on desktop and 0.000 on mobile. These are local, single-sample lab measurements, not field Core Web Vitals.

[Desktop preview](previews/redesign-desktop.png) · [Mobile preview](previews/redesign-mobile.png)

Taste's hover and moment files were copied unchanged into `public/assets/taste/`. A small local adapter mounts them on React navigation and cleans up the research moment when leaving the page. The page is readable at rest; reduced-motion CSS disables decorative motion. Reduced-motion behavior was inspected in code; a dedicated screen-reader or reduced-motion browser audit was not performed.

## Remaining limitations

The Taste finish gate is not a clean pass. Its remaining findings are reproduced below, with no waivers. Most enforce the skill's exact starter layout: a fixed one- or two-screen section height, one 12-column grid, uniform heading sizes, prescribed class names, and no portrait captions. This redesign uses variable-height case studies and a mobile hero that continues below the first viewport, retains the owner's portrait captions, and presents real publication titles and custom workflow graphics. Those choices remain visible in the previews and are not marked as gate passes.

The gate's first run caught a development-only public-module import error. That was fixed by loading the motion integration through a regular module script in HTML; final development and production browser checks show no script load errors. Contrast and clipped-diagram findings from that run were also corrected.

The previous dependency audit's 14 advisories remain outside this visual redesign. No packages were installed or upgraded. External link availability, mail-client handoff, actual email delivery, hosted deployment behavior, and assistive-technology output were not independently verified. No email was sent. The formal gstack branch review was not completed on `main`; this report does not claim an adversarial review.

## Open Taste findings (62)

| Check | Target | Finding |
| --- | --- | --- |
| `nav` | div.site-shell > header.site-header.nav > div.nav-inner.page-width > a.wordmark "mi ↗ Mahimul Islam ENGINEERING & RESEARC" | nav link wraps to a second line |
| `row-gap` | article#genome "GENOME MEDICAL + Patient Provider CONNEC" | stretched alone across the last row (1280px) while the 2 like it above are 624px |
| `no-visual` | section#selected-work "Ideas into working systems." | pictures, effects and mocks cover 4% of this section; a feature section needs a visual (about 25% or more) |
| `text-only` | main#main > section.about-home.section "Engineering, with a researcher’s curiosi" | the closing section is only text: no picture, icon, mock or effect in it |
| `copy-headings` | div.wrap.page-width > header.section-heading > div.section-heading-row > h2 "Ideas into working systems." | "Ideas into working systems." names no product, part, place or section (10 headings like it; at most one brand line per page) (and 9 more like it: "Connecting clients and f", "AI should be able to exa", "A Metacognitive Architec", "Correcting LLM Errors: A", ...) |
| `heading-scale` | article#maeknit > div.work-content > h3 "Connecting clients and factories." | h3 headings in 2 sizes, 24px ("Interfaces") to 38px (x1.58) |
| `off-grid` | footer.site-footer > div.wrap.page-width > div.footer-bottom > span:nth-of-type(2) "SOFTWARE + HUMAN EXPERTISE" | left edge at 658.5px, 17.5px off a common edge of its section at 676px (4 elements) |
| `visual-caption` | div.wrap.page-width > div.hero-grid > figure.hero-portrait.hero__media > figcaption "Mahimul Islam New York, NY" | a figcaption under the picture mahimul-portrait-640.jpg: "Mahimul Islam New York, NY"; no caption or description under any image, render or visual (house rule) |
| `section-height` | main#main > section.about-home.section "04 / A LITTLE BACKGROUNDEngineering,with" | the section is 503px tall (0.6 screens), 397px short of one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2) |
| `section-height` | section#selected-work "01 SELECTED WORKIdeas intoworking system" | the section is 2176px tall (2.4 screens), 376px over two screens (1800px): every section after the hero is one screen or two, 2px either way (SR-2) |
| `section-height` | section#research "02 / RESEARCHGEORGIA TECH + MAEKNITAI sh" | the scene's section is 1032px tall (1.1 screens), 132px over one screen (900px): every section after the hero is one screen or two, 2px either way; a pinned scene is (hold + 1) screens tall, so write data-big-scene-opts='{"hold": 1}' (two screens) and keep --h on the section (and 2 more like it: "HAVE A PROJECT OR A RESE", "03 HOW I WORKAcross the ") (SR-2) |
| `section-height` | div#root > div.site-shell > footer.site-footer "HAVE A PROJECT OR A RESEARCH QUESTION?Le" | the section's content does not fit it: its lowest content ends 763px below its top, past 707px (the section less 72px of bottom padding) (SR-2) |
| `section-air` | div.site-shell > footer.site-footer > div.wrap.page-width > div.footer-invitation "HAVE A PROJECT OR A RESEARCH QUESTION?Le" | a bottom border across 100% of the container, between the section's content: sections and their parts are told apart by air and ground, not lines (SR-3) |
| `one-section` | footer.site-footer > div.wrap.page-width > div.footer-invitation > a:nth-of-type(1) "Let’s talk." | the screen at scroll 5087px (the top of section 5) shows 397px of section 6 and the heading of section 6 whole and the content of 2 sections, over 24px each beside section 5: a screen shows one section (another may peek 8px, 24px WARN) (SR-4) |
| `one-section` | div.wrap.page-width > header.section-heading > div.section-heading-row > h2 "Across the stack.Close to the problem." | the screen at scroll 3600px (stride 4) shows 391px of section 4 and the heading of section 4 whole and the content of 2 sections, over 24px each beside section 3: a screen shows one section (another may peek 8px, 24px WARN) (SR-4) |
| `one-section` | main#main > section.about-home.section "04 / A LITTLE BACKGROUNDEngineering,with" | the screen at scroll 4500px (stride 5) shows 313px of section 5 and the content of 2 sections, over 24px each beside section 4: a screen shows one section (another may peek 8px, 24px WARN) (and 4 more like it: scroll 2700px, scroll 5400px, scroll 89px) (SR-4) |
| `one-heading` | div.wrap.page-width > header.section-heading > div.section-heading-row > h2 "Across the stack.Close to the problem." | headings of two sections show whole on one screen at 6 of 110 scroll positions (5.5%; at scroll 3500, 3550, 3600, 5050px), here with "11,000+": at most 3% on a desktop (SR-5) |
| `container-edges` | div#root "Skip to contentmi↗Mahimul IslamENGINEERI" | a <div> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6) |
| `container-edges` | main#main > section.hero > div.wrap.page-width "MAHIMUL ISLAM NEW YORK CITYSoftwareengin" | the hero's .wrap holds 2 children, 0 of them .hero-text: one .hero-text and at most one strip (SR-6) |
| `container-edges` | section.about-home.section > div.wrap.page-width > div.about-home-copy > p.large-copy "I’m Mahimul. I enjoy taking a complicate" | 2 text blocks start on a left line at x 765, 685px from the container's left: text starts on the container's left, or on one split line (x 623, 732, 841) (also "I’ve spent 6+ years working in h") (SR-6) |
| `split-pair` | main#main > section.section.practice-section > div.wrap.page-width > div.practice-grid "A CONNECTED PRACTICE01INTERFACE02PLATFOR" | the two columns of the split start 13px apart at the top: a split's columns are top-aligned, 8px either way (SR-8) |
| `split-pair` | main#main > section.about-home.section > div.wrap.page-width "04 / A LITTLE BACKGROUNDEngineering,with" | the split's columns are off the page's one pair of lines: its right column starts at x 765, the first split's at 861; its right column starts at x 765, on none of the split lines 623 (k=5), 732 (k=6), 841 (k=7) (SR-8) |
| `split-pair` | main#main > section.hero > div.wrap.page-width > div.hero-grid "MAHIMUL ISLAM NEW YORK CITYSoftwareengin" | the split's columns are off the page's one pair of lines: its right column starts at x 861, on none of the split lines 623 (k=5), 732 (k=6), 841 (k=7) (SR-8) |
| `button-styles` | section.about-home.section > div.wrap.page-width > div.about-home-copy > a.primary-link.btn "More about me" | one button style (soft, fill #0f5257, outline #0f5257) with labels in 2 sizes: 12, 15px ("More about me", "View my work") |
| `button-styles` | section#selected-work > div.wrap.page-width > a.secondary-link.all-work "View all projects" | one button style (soft, outline #141414) with labels in 2 sizes: 12, 15px ("View all projects", "Read my research") |
| `heading-scale` | div.research-feature-grid > div.research-aside > div.research-stat > strong "11,000+" | the figure "11,000+" is set at 60px, larger than the section headings (h2 43px) |
| `edge-left` | section.hero.is-still figure.hero-portrait.hero__media "THE PERSON BEHIND THE WORKMahimu" | starts at x 861; the lines are 80 and the column starts |
| `edge-left` | header.section-heading p "Manufacturing platforms, healthc" | starts at x 1023.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-name "MAEKNIT platform" | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work h3 "Connecting clients and factories" | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-summary "Software that takes a client’s i" | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-name "KnitDraft / TMK-Knit" | starts at x 111; the lines are 80 and the column starts |
| `edge-left` | #selected-work h3 "Helping experts program knitting" | starts at x 111; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-summary "Research into AI-assisted indust" | starts at x 111; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-name "SAMI · Design Intelligence Lab" | starts at x 767; the lines are 80 and the column starts |
| `edge-left` | #selected-work h3 "Helping AI agents correct their " | starts at x 767; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-summary "An AI agent that can find errors" | starts at x 767; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-name "Genome Medical" | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work h3 "Building healthcare software." | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #selected-work p.work-summary "Secure clinical platforms and pa" | starts at x 808.6; the lines are 80 and the column starts |
| `edge-left` | #research h3 "A Metacognitive Architecture for" | starts at x 674.5; the lines are 80 and the column starts |
| `edge-left` | #research h3 "Correcting LLM Errors: A Metacog" | starts at x 674.5; the lines are 80 and the column starts |
| `edge-left` | #research h3 "Adaptable Social AI Agents" | starts at x 674.5; the lines are 80 and the column starts |
| `edge-left` | header.section-heading p "I work from architecture to inte" | starts at x 1053.9; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section p "I build the interfaces, services" | starts at x 106; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section h3 "Interfaces" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section p "React · Next.js · TypeScript · V" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section h3 "Systems" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section p "Python · Node.js · Flask · Djang" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section h3 "Infrastructure" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section p "AWS · Docker · PostgreSQL · Neo4" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section h3 "Intelligence" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.section.practice-section p "LLMs · AI agents · Knowledge-Bas" | starts at x 803; the lines are 80 and the column starts |
| `edge-left` | section.about-home.section div.about-home-copy "I’m Mahimul. I enjoy taking a co" | starts at x 765; the lines are 80 and the column starts |
| `edge-left` | section.about-home.section p.large-copy "I’m Mahimul. I enjoy taking a co" | starts at x 765; the lines are 80 and the column starts |
| `edge-left` | section.about-home.section p "I’ve spent 6+ years working in h" | starts at x 765; the lines are 80 and the column starts |
| `screen-height` | section.section.practice-section section.section.practice-section "03 HOW I WORKAcross the stack.Cl" | 978px, 1.21 screens; a section is exactly one or two (--h) |
| `screen-short` | section.about-home.section section.about-home.section "04 / A LITTLE BACKGROUNDEngineer" | 503px tall; one screen under the nav is 811px |
| `screen-height` | section.about-home.section section.about-home.section "04 / A LITTLE BACKGROUNDEngineer" | 503px, 0.62 screens; a section is exactly one or two (--h) |
| `neighbour` | #research section.research-feature.section "02 / RESEARCHGEORGIA TECH + MAEK" | framed, 135px of section.section.practice-section section.section.practice-section "03 HOW I WORKAcross the stack.Cl" shows |
| `neighbour` | section.section.practice-section section.section.practice-section "03 HOW I WORKAcross the stack.Cl" | framed, 5px of section.about-home.section section.about-home.section "04 / A LITTLE BACKGROUNDEngineer" shows |
| `hero-fold` | section.hero.is-still section.hero.is-still "MAHIMUL ISLAM NEW YORK CITYSoftw" | ends at y 1145, past the fold (844): 1.39 screens tall |

No waivers were applied. Full machine results and screenshots are in the ignored `.taste-skill/` folder.

## Retained copy warnings

The checker also flags the following wording. Conventional navigation labels, separate routes for projects and publications, and supplied research terminology are retained for clarity. No claim was added to satisfy the copy checker.

- `copy-buttons`: "Résumé" does not start with a verb (book, buy, try, start, get, see...) (and 1 more like it: "More about me")
- `copy-actions`: 2 labels for one target /projects: "View my work", "View all projects"
- `copy-actions`: the main action "View my work" does not read word for word the same in the closing section
- `copy-numbered`: 15 step numbers
- `copy-eyebrows`: 8 eyebrow or kicker labels
