# Webpage Improvement Ideas

## Obvious Enhancements
1. **Restore the Portuguese Landing Page**  
   The header includes a language switcher link to `index-pt.html`, but that file is missing, which creates a broken navigation experience for Portuguese-speaking visitors. Add the localized page or point the link at an existing resource so the toggle works.【F:index.html†L129-L141】
2. **Fix the Instagram Link Styling**  
   The Instagram footer link concatenates `hover:text-[--primary-color]` with `transition-colors` (missing a space), so the hover transition never triggers. Insert the missing space to make the hover effect consistent with the other social links.【F:index.html†L346-L364】
3. **Align Cohort Size Figures**  
   The Impact section highlights "2,000+" mothers and children, while the Projects section references "over 2,300." Standardize the cohort count to avoid confusing readers.【F:index.html†L210-L236】【F:index.html†L276-L308】

## Less Obvious Opportunities
1. **Respect Reduced Motion Preferences**  
   The hero slider auto-plays and the animated sections slide in on scroll. Honor `prefers-reduced-motion` by pausing auto-rotation and simplifying animations for visitors sensitive to motion, improving accessibility compliance.【F:index.html†L62-L118】【F:index.html†L397-L466】
2. **Preload Above-the-Fold Imagery**  
   The first hero slide image and the logo are critical visuals. Preloading them (e.g., `<link rel="preload" as="image">`) would reduce the perceived load time on slower connections.【F:index.html†L117-L192】
3. **Add Structured Data for News Items**  
   Marking the News & Updates cards with JSON-LD `NewsArticle` schema would help search engines understand and surface the latest studies in rich results, boosting discoverability.【F:index.html†L308-L344】
4. **Automate Slider Interaction Tests**  
   Keep the new Playwright test, but extend coverage to validate manual dot navigation and pause-on-hover behavior if introduced, catching regressions in future UI tweaks.【F:tests/hero-slider.spec.ts†L1-L27】
5. **Introduce Analytics Consent Handling**  
   If analytics or tracking is added later, plan for a consent banner and region-aware defaults to stay compliant with GDPR/ LGPD regulations, which is especially relevant for international cohorts.【F:index.html†L1-L469】
