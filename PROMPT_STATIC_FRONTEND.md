# Prompt — Static Frontend Project

You are working on a frontend-only, static web project.

## First: confirm the stack

Before coding, inspect the repository and ask me to confirm the technology stack if it has not already been explicitly approved.

At minimum confirm:
- React or another frontend framework?
- JavaScript or TypeScript?
- CSS, Tailwind, CSS Modules, or another styling approach?
- Framer Motion, GSAP, CSS animation, or no animation?
- Is SEO a priority, and if yes, is React SPA acceptable or should we use an SSR/SSG-capable framework?

Do not silently change the stack.

## Reference screenshots

I may provide screenshots separately with this prompt. Analyze those screenshots before implementation.

Do not store those reference screenshots in the project unless I explicitly ask you to.

Use the screenshots to understand:
- layout
- hierarchy
- typography
- spacing
- colors
- components
- interactions
- responsive behavior

Do not invent unclear functionality. Ask focused questions when an important requirement cannot be determined.

## Project documentation

Before coding, read:
- `AGENTS.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/RULES.md`
- `docs/TASKS.md`
- `docs/MEMORY.md`
- `docs/TECH_STACK.md`

If these documents do not exist, create them using the project's documentation structure before substantial development.

## Implementation rules

Investigate the existing implementation and all related functionality first.

Add the requested functionality with the smallest possible change set.

Preserve:
- existing functionality
- existing data flow
- existing business logic
- existing UI/UX
- existing reusable components

Do not modify or refactor unrelated code.

Use dynamic, data-driven implementation. Avoid unnecessary hard-coded content, repeated markup, magic values, and duplicated logic.

Use a proper, scalable folder structure and consistent naming conventions.

Use global style/theme tokens instead of scattering visual constants throughout the project.

Mobile responsiveness is mandatory. Verify mobile, tablet, and desktop.

Maintain SEO friendliness wherever applicable using semantic HTML, page metadata, accessible navigation, meaningful headings, descriptive links/images, clean URLs, and appropriate structured data.

## Documentation and handoff

After every meaningful module:
1. verify the implementation
2. update the relevant documentation files automatically
3. update `TASKS.md`
4. update `MEMORY.md` with the exact current state and next step
5. update `ARCHITECTURE.md`, `DESIGN.md`, `TECH_STACK.md`, or `PRD.md` when their content actually changed
6. commit the completed module
7. push it to the configured Git remote

If push/authentication is unavailable, report the exact blocker rather than pretending it succeeded.

The repository must always remain understandable to another developer who joins months later.

## Scope discipline

Only answer/implement the requested task.

If another change is strictly necessary to make the requested task work correctly, make that necessary change and explain it briefly.

Do not add unrelated features.

## Completion criteria

Do not say the task is complete until:
- requested functionality works
- existing affected functionality still works
- responsive behavior is checked
- relevant build/lint/tests pass
- SEO requirements relevant to the change are checked
- documentation is synchronized
- Git status/commit/push state is known


# UI IMPLEMENTATION BRIEF — AKASH PORTFOLIO

Build Akash's portfolio as a premium editorial-style personal website inspired by the supplied visual references.

The design must feel like a highly art-directed creative portfolio rather than a conventional developer portfolio.

## Visual Language

Use a strict visual system built around:

- Black
- White
- Neutral grays
- One dominant yellow accent

The yellow accent is reserved for important interactions and emphasis.

Do not introduce additional brand colors unless absolutely required by content.

The interface should use sharp geometric forms rather than rounded-card UI.

Avoid:
- pill buttons
- excessive rounded cards
- excessive shadows
- generic SaaS layouts
- excessive gradients
- overly colorful UI
- dense card grids

## Typography

Typography is one of the most important parts of the design.

Use:
- extremely bold condensed uppercase display typography for major headings
- clean neutral typography for descriptions and supporting information

Large headings should behave as visual compositions rather than ordinary text.

Use tight line-height and tight letter spacing for display typography.

Allow headings to become extremely large on desktop.

Use responsive typography so the composition scales naturally across viewport sizes.

## Grid

Create a visible editorial grid.

Use subtle vertical and horizontal rules where appropriate.

The grid should sometimes remain visible behind content.

The grid is decorative as well as structural.

Do not make the lines visually dominant.

Use:
- 12-column desktop composition
- 6-column tablet composition
- simplified 4-column mobile composition

## Light Sections

Light sections should feel like premium printed editorial layouts.

Use:

- white background
- black typography
- subtle gray background typography
- thin gray grid lines
- yellow accents

Large background words or letters may sit behind the content at very low contrast.

These background elements must never interfere with readability.

## Dark Sections

Dark sections should feel immersive and cinematic.

Use:

- black background
- white typography
- muted gray supporting text
- subtle white grid lines
- yellow accents

Photography can become monochrome/high contrast in dark sections.

Use dark overlays where necessary to preserve text readability.

Do not simply invert every component mechanically. Light and dark sections should feel intentionally art-directed.

## Header

Keep the header minimal.

Place the Akash logo/mark on the left.

Place a small yellow square menu button on the right.

The menu control should be sharp-edged and visually simple.

The header should remain visually independent from the content beneath it.

## Hero

Do not create a generic centered developer hero.

Use an editorial composition.

Large typography should dominate the viewport.

Supporting text and imagery should occupy secondary positions.

Use asymmetry, whitespace and grid lines to create visual tension.

The first viewport should immediately communicate:

- Akash
- Developer identity
- Professional positioning
- Strong visual personality

## Projects

Present selected projects as editorial stories rather than ordinary cards.

Each project should be allowed to occupy significant visual space.

Use:
- large imagery
- oversized project titles
- supporting metadata
- short descriptions
- yellow interaction accents

Project images should use intentional cropping.

Use monochrome or desaturated treatment where appropriate.

Do not put every project into identical rounded cards.

## Experience / Career

Use a timeline/editorial layout.

Large typography should establish hierarchy.

Use subtle divider lines between entries.

Keep supporting information compact.

Allow important dates, roles and technologies to become visual metadata.

## Statement Section

Include a large personal statement.

The statement should use extremely large condensed typography.

Highlight selected words in yellow.

Place one or two supporting images around the typography.

The statement must remain the dominant visual element.

## Contact

Use a dark section with a light contact panel or modal-style composition.

The contact surface should contain:

- first name
- last name
- email
- message
- submit action

Keep the form visually minimal.

Use light gray input surfaces.

Use a sharp yellow submit button.

On mobile, stack all fields vertically.

## Footer

Create a spacious editorial footer.

Include:

- Akash logo
- navigation
- social links
- contact information
- credits
- privacy/disclaimer links

Use subtle vertical dividers.

Do not compress the footer unnecessarily.

Whitespace is intentional.

## Responsive Behavior

Use these viewport breakpoints:

- mobile: below 640px
- small: 640px
- medium: 768px
- large: 1024px
- extra large: 1280px
- 2XL: 1536px

On mobile:

- simplify the grid
- reduce decorative elements
- stack complex layouts
- reduce heading scale while retaining strong typography
- make imagery wider
- stack form fields
- keep touch targets comfortable

On tablet:

- preserve the editorial feeling
- reduce the number of simultaneous columns
- maintain large typography

On desktop:

- use the full 12-column composition
- preserve generous whitespace
- use very large typography
- allow asymmetric image/text arrangements

## Motion

Use restrained editorial motion.

Prioritize:

- typography reveals
- image reveals
- section transitions
- subtle image scaling
- horizontal carousel movement
- menu reveal
- modal transitions
- gallery dragging

Motion should feel smooth and intentional.

Do not animate every element.

Respect reduced-motion preferences.

## Design Token Rules

Use the following hierarchy:

### Primary
Yellow:
`#FDD60A`

### Secondary
Black:
`#000000`

### Neutrals
Use white and a controlled grayscale range from very light gray through near-black.

### Dark mode
Black background + white text + yellow accent.

### Light mode
White background + black text + yellow accent.

Never introduce arbitrary colors into individual components.

Reuse the established tokens consistently.

## Most Important Rule

The finished website should feel like an editorial creative portfolio.

It should NOT feel like:

- a template
- a SaaS dashboard
- a typical developer portfolio
- a collection of cards
- a generic agency website

Use typography, whitespace, grid, imagery, contrast and composition to create the personality.

The reference should influence the visual language, composition and interaction philosophy, while Akash's own identity, projects, experience and content remain original.

Do not blindly reproduce the reference website.