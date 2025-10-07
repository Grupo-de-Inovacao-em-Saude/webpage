# Review Tasks

## Typo Fix
- **Issue**: The Instagram footer link merges the `hover:text-[--primary-color]` and `transition-colors` classes because a space is missing between them, preventing the transition class from applying. (See `index.html`, line 362.)
- **Task**: Insert the missing space so both Tailwind utility classes apply correctly.

## Bug Fix
- **Issue**: The language switcher in the header links to `index-pt.html`, but that file is absent from the repository, resulting in a broken navigation link. (See `index.html`, lines 134-138, and repository listing.)
- **Task**: Add the missing Portuguese translation page or adjust the link to point to an existing resource.

## Documentation Discrepancy
- **Issue**: The impact metrics list "2,000+ Mothers & Children in Cohort" while the projects section describes tracking "over 2,300 children and their mothers," presenting inconsistent cohort counts. (See `index.html`, lines 226 and 300-301.)
- **Task**: Align the stated cohort size across sections to avoid confusing readers.

## Test Improvement
- **Issue**: Interactive behaviors such as the hero slider auto-rotation and dot controls currently lack automated coverage even though the logic is implemented in the inline script. (See `index.html`, lines 429-466.)
- **Task**: Introduce an automated UI test (e.g., Playwright) that loads the page, waits for the slider interval, and asserts that the active slide/dot changes, ensuring regressions are caught.
