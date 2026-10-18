# Development Rules

## General
- Investigate before modifying.
- Make the smallest possible change set.
- Preserve existing functionality.
- Do not refactor unrelated code.
- Do not hallucinate.
- Ask when required information is missing or ambiguous.
- Only solve the requested problem unless an additional change is necessary to make it work safely.

## Code quality
- Keep code readable and maintainable.
- Prefer simple solutions.
- Reuse existing code where appropriate.
- Avoid duplicate logic.
- Use meaningful names.
- Keep modules focused.
- Avoid unnecessary dependencies.
- Avoid magic numbers/strings where they should be configuration or design tokens.

## Dynamic implementation
- Prefer data-driven rendering.
- Store repeated content in structured data/constants/configuration where appropriate.
- Do not hard-code lists that should come from data.
- Do not hard-code backend results.
- Keep environment-specific values in environment/configuration mechanisms.

## Naming
- Components: PascalCase.
- Hooks: `useSomething`.
- Functions/variables: camelCase.
- Constants: project-consistent convention; use UPPER_SNAKE_CASE when it improves clarity for true constants.
- Files: follow the framework's established convention and keep naming consistent.
- Database/API names: follow the existing project convention; do not introduce a second style.

## Structure
- Organize by feature where the project benefits from it.
- Keep shared components/utilities separate from feature-specific code.
- Do not create unnecessary abstraction layers.

## Styling
- Use the global design system.
- Keep theme tokens centralized.
- Avoid scattered duplicate color, spacing, and typography definitions.
- Preserve existing UI conventions unless the requested change requires otherwise.

## Responsive
- Mobile is mandatory.
- Check mobile, tablet, and desktop.
- Avoid horizontal overflow.
- Ensure touch targets are usable.
- Do not use desktop-only assumptions.

## SEO
- Use semantic HTML.
- Use correct page metadata.
- Use one meaningful primary heading per page where appropriate.
- Keep important content crawlable.
- Use descriptive links and image alt text.
- Add structured data only when relevant.
- Do not claim SEO is complete without checking the actual rendered pages/build behavior.

## Git
- Complete and verify each module before commit/push.
- Keep commits focused and descriptive.
- Push completed modules to the configured remote.
- Never claim a push succeeded unless it actually succeeded.

## Documentation
Update project documentation automatically after meaningful changes. Never leave the current state dependent only on chat history.
