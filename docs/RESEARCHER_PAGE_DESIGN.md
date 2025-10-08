# Researcher Detail Page Design

## 1. Current Landing Page Map
To keep the new researcher pages visually coherent with the existing landing page, here is a quick map of the major sections already present in `index.html`:

1. **Hero slider (`#home`)** – three-panel carousel with overlay headlines that introduces GPIS.
2. **Group overview (`#group`)** – mission statement, key metrics, and a featured call-to-action.
3. **Members highlight (`#members`)** – grid of core team members with roles and social links.
4. **Projects showcase (`#projects`)** – cards describing ongoing initiatives with tags.
5. **Impact stats (`#impact`)** – numeric counters for publications, partnerships, etc.
6. **News & updates (`#news`)** – latest articles and announcements in card layout.
7. **Partners & supporters (`#partners`)** – sponsor logos with hover effects.
8. **Contact & newsletter (`#contact`)** – form, location map, and footer with quick links.

These anchors can inform consistent typography, spacing, and color usage for the standalone researcher pages.

## 2. Page Goals
Each researcher page should:
- Give visitors a polished, credible snapshot of the individual’s expertise and contributions.
- Surface reusable content blocks (e.g., publications, projects, media) that can be sourced from structured data.
- Encourage contact, collaboration, or deeper exploration of the researcher’s work.

## 3. Layout Overview
1. **Sticky Header & Breadcrumb**
   - Use the existing translucent header style with navigation back to the main site.
   - Add a breadcrumb such as `Home → Researchers → Dr. Jane Doe` for orientation.

2. **Hero Profile Banner**
   - Left: portrait photo in a rounded frame with subtle drop shadow.
   - Right: name, pronouns, current title, affiliation, quick contact buttons (email, LinkedIn, ORCID).
   - Background: gradient overlay echoing the primary colors, optionally with a research-themed illustration.

3. **At-a-Glance Quick Facts**
   - Horizontal info cards for research areas, methodologies, years with GPIS, languages spoken, and availability (e.g., “Open to collaborations”).
   - Include iconography from Heroicons or similar for visual scanning.

4. **Narrative Biography & Mission**
   - Two-column layout on desktop: left column for narrative paragraphs; right column for key highlights (e.g., “Leads the Digital Epidemiology Lab”).
   - Mobile: stack content with generous spacing.

5. **Research Focus Tabs**
   - Tabbed interface dividing focus areas such as "Digital Epidemiology", "Maternal Health", "Data Governance".
   - Each tab contains: brief summary, representative projects, relevant metrics.

6. **Active Projects Module**
   - Card grid pulling from the shared projects data source. Each card shows project name, role, timeline, and CTA to the project detail page.
   - Highlight the researcher’s specific contribution (e.g., "Principal Investigator", "Data Scientist").

7. **Key Publications & Outputs**
   - List of up to 6 featured items with title, venue, year, and quick links (PDF, DOI).
   - Provide filters or tags (e.g., "Journal", "Conference", "Policy Brief").
   - Include a "View all publications" link if a longer list exists.

8. **Impact Metrics & Recognitions**
   - Animated counters for citations, grants secured, media mentions.
   - Carousel or timeline for awards, keynote talks, or recognitions.

9. **Media & Talks Gallery**
   - Responsive gallery combining embedded videos, audio interviews, and photo highlights.
   - Lightbox modal for enlarged viewing.

10. **Collaborators & Team**
    - Avatars of frequent collaborators with roles and quick links to their profiles.
    - Optionally, a network visualization (static image) for a more advanced interaction.

11. **Contact & Availability CTA**
    - Primary CTA button ("Request collaboration", "Book office hours") linking to contact form or email.
    - Secondary CTA for downloading a full CV or biosketch.

12. **Related News & Updates**
    - Pull latest news posts tagged with the researcher. Each card shows image thumbnail, headline, and publication date.

13. **Footer Consistency**
    - Reuse the landing page footer with social links and newsletter sign-up.

## 4. Interaction & Accessibility Notes
- Ensure keyboard navigability for tabs, sliders, and modals (ARIA roles and labels).
- Maintain high contrast for text against gradient backgrounds.
- Provide descriptive alt text for portraits, gallery images, and award badges.
- Use `prefers-reduced-motion` media queries to tone down animations for sensitive users.

## 5. Content Model Recommendations
To keep the researcher pages scalable, consider structuring the data as follows:

```json
{
  "id": "jane-doe",
  "name": "Dr. Jane Doe",
  "pronouns": "she/her",
  "title": "Senior Research Fellow",
  "affiliation": "Global Public Health Innovation Studio",
  "contact": {
    "email": "jane.doe@example.org",
    "linkedin": "https://linkedin.com/in/janedoe",
    "orcid": "0000-0002-1234-5678"
  },
  "headshot": "/images/researchers/jane-doe.jpg",
  "bio": ["Paragraph 1", "Paragraph 2"],
  "focusAreas": [
    {
      "name": "Digital Epidemiology",
      "summary": "Short description...",
      "projects": ["project-alpha", "project-beta"],
      "metrics": {"datasets": 5, "publications": 12}
    }
  ],
  "projects": [
    {
      "id": "project-alpha",
      "role": "Principal Investigator",
      "timeline": "2022 – Present"
    }
  ],
  "publications": [
    {
      "title": "Longitudinal Health Analytics...",
      "venue": "Lancet Digital Health",
      "year": 2023,
      "links": {"doi": "https://doi.org/...", "pdf": "/pdfs/..."},
      "type": "Journal"
    }
  ],
  "awards": [
    {"title": "Best Paper", "event": "ICHI 2023", "year": 2023}
  ],
  "media": [
    {"type": "video", "title": "Keynote at...", "url": "https://youtu.be/..."}
  ],
  "collaborators": ["john-smith", "amara-lee"],
  "newsTags": ["digital-epidemiology", "maternal-health"],
  "cta": {
    "primary": {"label": "Request collaboration", "href": "/contact?to=jane-doe"},
    "secondary": {"label": "Download CV", "href": "/docs/jane-doe-cv.pdf"}
  }
}
```

With a structured schema, you can programmatically generate pages and keep the homepage sections synchronized.

## 6. Next Steps
- Approve this layout direction, then replicate similar design frameworks for project and news detail pages.
- Define shared components (hero, tabbed content, galleries) in your chosen frontend stack to ensure consistency.
- Align with content owners to gather high-quality assets (headshots, publication lists, videos).

