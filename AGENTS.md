# AI Development Contract

## 1. Before changing code

1. Read the relevant project documentation:
   - `docs/PRD.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DESIGN.md`
   - `docs/RULES.md`
   - `docs/TASKS.md`
   - `docs/MEMORY.md`
   - `docs/TECH_STACK.md`
2. Investigate the existing implementation and all related functionality first.
3. Trace dependencies, shared components, services, schemas, routes, state, and data flow before changing anything.
4. If the requested result or required information is unclear, ask a focused question before implementation. Do not guess.

## 2. Tech-stack gate

Before starting a new project or major rebuild, confirm the technology stack with the owner.

Ask:
- Should this use React, Next.js, or another framework?
- Is the backend static/mock-only, Supabase, or another backend?
- Is TypeScript required?
- Is Tailwind/CSS Modules/plain CSS preferred?
- Are Framer Motion or GSAP actually needed?

Do not silently replace the approved stack.

If the owner has already explicitly approved the stack for the current project, do not repeatedly ask the same question. Record the decision in `docs/TECH_STACK.md`.

## 3. Change policy

Investigate first. Then make the smallest possible change set.

- Preserve existing functionality.
- Preserve existing data flow and business logic.
- Do not refactor unrelated code.
- Do not rename or move shared code without a clear reason.
- Reuse existing components, utilities, services, and patterns when appropriate.
- Before changing shared code, understand all known consumers.
- Do not duplicate logic.
- Do not hard-code values that should be dynamic/configurable/data-driven.

## 4. Reference-image policy

When reference screenshots are supplied:
- Analyze them carefully before implementation.
- Treat them as visual references, not as permission to copy unknown assets or content.
- Preserve the intended hierarchy, spacing, typography, composition, interaction patterns, and responsive behavior.
- Do not store the supplied reference screenshots in the repository unless the owner explicitly requests it.
- If an important visual detail cannot be determined from the screenshot, ask rather than invent.

## 5. Responsive requirement

Mobile is mandatory.

Every module must be checked at:
- mobile
- tablet
- desktop

Do not treat responsive design as a later cleanup task.

## 6. SEO requirement

Where the project is publicly accessible, maintain SEO-friendly implementation:
- semantic HTML
- correct heading hierarchy
- meaningful page titles and descriptions
- canonical URLs where applicable
- crawlable navigation
- descriptive image `alt` text
- clean URLs
- appropriate Open Graph/Twitter metadata where applicable
- structured data where it genuinely applies
- avoid hiding important content behind client-only rendering when the chosen architecture allows a better solution
- avoid duplicate metadata across pages

If SEO requirements conflict with a purely client-rendered architecture, explain the trade-off and ask before changing frameworks.

## 7. Global styling

Use a centralized design system:
- global theme variables/tokens
- typography scale
- spacing scale
- colors
- breakpoints
- component states

Avoid scattered magic values when a value belongs in the global design system.

## 8. Documentation synchronization

After every meaningful module/feature:
1. Update `docs/TASKS.md`.
2. Update `docs/MEMORY.md` with what changed, current status, important decisions, and the exact next continuation point.
3. Update `docs/ARCHITECTURE.md` if architecture/data flow/folder structure changed.
4. Update `docs/DESIGN.md` if visual rules/components changed.
5. Update `docs/TECH_STACK.md` if technologies or dependencies changed.
6. Update `docs/PRD.md` only when product requirements/scope changed.
7. Keep documentation factual and synchronized with the actual implementation.

The owner should not have to manually tell the AI which documentation file to update.

## 9. Git workflow

After a module is completed and verified:
- review the diff
- run the relevant checks/tests
- update documentation
- create a focused commit
- push to the configured remote branch

If Git credentials, a remote, or permission are unavailable, do not pretend the push happened. Report the exact blocker.

Do not create meaningless commits for every tiny line change. A module-level completed change should have a meaningful commit.

## 10. Verification

Before declaring a module complete:
- verify the requested behavior
- verify affected existing behavior
- check responsive behavior
- check console/build/lint errors relevant to the change
- check broken imports/routes
- check SEO requirements relevant to the page
- confirm documentation is synchronized

## 11. Handoff quality

A developer joining the project later must be able to answer from the repository:
- What is this product?
- What has been completed?
- What is currently being worked on?
- What is the architecture?
- What is the approved tech stack?
- Where is the relevant code?
- Why were important decisions made?
- What remains to be done?
- What should be done next?

Never leave project state only inside chat history.
