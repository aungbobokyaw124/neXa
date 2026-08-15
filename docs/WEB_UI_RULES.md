neXa WEB UI RULES

Version: 1.0
Status: Official
Brand: neXa
Tagline: Build Faster. Create Smarter.

---

1. PURPOSE

This document defines the official UI, UX, frontend architecture, responsive design, accessibility, performance, and interaction rules for all neXa websites and web applications.

Every new neXa interface must follow these rules unless the owner explicitly approves an exception.

---

2. CORE UI PRINCIPLES

Every neXa interface must prioritize:

1. Usability
2. Clarity
3. Consistency
4. Mobile-first design
5. Accessibility
6. Performance
7. Maintainability
8. Scalability
9. Security
10. Visual quality

A beautiful interface that is difficult to use is not considered a successful neXa interface.

---

3. MOBILE-FIRST RULE

All interfaces must be designed for mobile first.

Minimum consideration:

- small phones
- large phones
- tablets
- laptops
- desktops
- large displays

Never design desktop first and simply shrink it for mobile.

---

4. RESPONSIVE DESIGN

Layouts must adapt naturally to screen size.

Avoid:

- fixed-width layouts
- horizontal scrolling
- overflowing text
- oversized buttons
- elements extending beyond the viewport
- desktop-only navigation

Use responsive:

- containers
- grids
- flex layouts
- typography
- spacing
- images
- navigation

---

5. DEFAULT THEME

The default neXa interface is:

Dark Mode

Primary background:

"#0B1F3A"

Accent:

"#10B981"

Primary text:

"#FFFFFF"

The interface should maintain sufficient contrast and readability.

---

6. COLOR SYSTEM

Use the official neXa colors.

:root {
  --nexa-primary: #0B1F3A;
  --nexa-accent: #10B981;
  --nexa-white: #FFFFFF;
}

Additional neutral colors may be created for:

- borders
- secondary text
- disabled states
- cards
- inputs
- shadows

Additional colors must not conflict with the brand identity.

---

7. NO GRADIENT RULE

Gradients are disabled by default.

Do not use:

linear-gradient()
radial-gradient()
conic-gradient()

unless explicitly approved.

The visual identity should rely on:

- color
- spacing
- typography
- contrast
- borders
- shadows
- layout

rather than gradients.

---

8. TYPOGRAPHY

Typography must be:

- readable
- responsive
- consistent
- modern
- accessible

Maintain clear hierarchy between:

- H1
- H2
- H3
- H4
- body
- labels
- captions
- metadata
- buttons

Do not make every heading oversized.

---

9. FONT SIZE

Avoid extremely small text.

Body text should remain comfortably readable on mobile.

Recommended approach:

- use responsive sizing
- use relative units where practical
- maintain consistent line height
- avoid excessive letter spacing

---

10. SPACING SYSTEM

Use a consistent spacing system.

Recommended base:

4
8
12
16
24
32
48
64
80
96

Do not use random spacing values throughout the project unless necessary.

---

11. CONTAINER SYSTEM

Pages should use a consistent content container.

Example:

.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}

Adjust according to the actual project requirements.

---

12. HEADER

The header must provide:

- clear branding
- easy navigation
- responsive behavior
- accessible controls
- consistent positioning

Desktop may use:

- logo
- navigation
- CTA

Mobile may use:

- logo
- menu button
- compact CTA

---

13. MOBILE NAVIGATION

Mobile navigation must:

- be easy to open
- be easy to close
- clearly show active page
- prevent accidental interaction
- support keyboard accessibility where applicable
- avoid covering important content unnecessarily

---

14. ANNOUNCEMENT BAR

An announcement bar may be used for:

- important updates
- product launches
- service announcements
- maintenance notices
- promotions

It must not become permanent visual noise.

Provide a dismiss option when appropriate.

---

15. HERO SECTION

The hero should communicate:

1. What neXa is
2. What it provides
3. Why it matters
4. What the user can do next

Recommended structure:

Eyebrow
↓
Headline
↓
Supporting text
↓
Primary CTA
↓
Secondary CTA
↓
Visual / Product preview

Avoid excessive text.

---

16. BUTTON SYSTEM

Buttons must clearly communicate actions.

Recommended categories:

Primary

Important main action.

Secondary

Alternative action.

Ghost / Text

Low-priority action.

Buttons must have:

- clear label
- sufficient touch area
- hover state
- focus state
- disabled state where needed
- loading state where appropriate

Avoid vague labels such as:

- Click Here
- Go
- More

Prefer:

- Get Started
- View Services
- Explore Products
- Contact neXa

---

17. TOUCH TARGETS

Interactive elements must be comfortable to use on mobile.

Avoid tiny:

- buttons
- icons
- links
- close controls

Controls should provide sufficient touch area.

---

18. CARDS

Cards should be used when they improve information organization.

Examples:

- service cards
- product cards
- article cards
- feature cards
- pricing cards
- project cards

Do not place everything inside cards.

Avoid unnecessary card nesting.

---

19. BORDERS

Use subtle borders when useful.

Recommended style:

border: 1px solid rgba(255,255,255,.10);

Do not make every element heavily bordered.

---

20. SHADOWS

Shadows should be subtle.

Use shadows to communicate:

- elevation
- modal separation
- floating elements
- important interactive surfaces

Do not use heavy shadows everywhere.

---

21. BORDER RADIUS

Use consistent radius values.

Recommended system:

6px
10px
14px
18px
24px

Choose a small set and reuse them consistently.

---

22. FORMS

Forms must have:

- visible labels
- clear inputs
- validation
- useful error messages
- accessible focus states
- appropriate input types
- mobile-friendly controls

Do not rely only on placeholder text as a label.

---

23. FORM VALIDATION

Validation messages must clearly explain:

- what is wrong
- how to fix it

Bad:

Invalid input

Better:

Please enter a valid email address.

---

24. SEARCH

Search should provide:

- visible input
- clear search action
- loading state
- empty state
- error state
- useful results

Search behavior should remain fast and predictable.

---

25. LOADING STATES

Every operation that may take time should provide feedback.

Examples:

- spinner
- skeleton
- progress indicator
- loading button

Do not leave users wondering whether something is working.

---

26. EMPTY STATES

When no data exists, explain what happened.

Example:

No products found.

Try another search or browse all products.

Avoid blank screens.

---

27. ERROR STATES

Errors must be understandable.

Include:

- what happened
- possible reason
- next action

Example:

Something went wrong.

Please try again.

When appropriate, provide a retry button.

---

28. TOASTS

Toast notifications should be:

- short
- meaningful
- non-blocking

Examples:

Saved successfully.
Copied to clipboard.
Message sent.

Do not use toasts for critical information that must remain visible.

---

29. MODALS

Use modals only when necessary.

A modal should:

- clearly identify its purpose
- provide a close action
- prevent unintended background interaction
- support keyboard interaction where applicable
- remain usable on mobile

Avoid opening multiple nested modals.

---

30. DRAWERS

Mobile drawers may be used for:

- navigation
- filters
- settings
- contextual actions

They must be easy to close and must not trap the user unnecessarily.

---

31. TABS

Tabs should be used for related content categories.

Rules:

- clear active state
- keyboard accessibility
- responsive behavior
- meaningful labels

Do not use tabs when all content should be visible together.

---

32. ACCORDIONS

Accordions are suitable for:

- FAQs
- documentation
- additional details

Use clear expand/collapse indicators.

---

33. FOOTER

The footer should provide useful navigation.

Possible sections:

- neXa identity
- services
- products
- resources
- social links
- contact
- legal
- copyright

Do not overload the footer.

---

34. FLOATING CONTACT HUB

A floating contact hub may provide quick access to official communication channels.

Possible channels:

- Viber
- Telegram
- Facebook
- email
- phone

Only display channels that are actually active.

Do not show fake or unavailable links.

---

35. IMAGES

Images must:

- load efficiently
- have appropriate dimensions
- use alt text where appropriate
- avoid unnecessary file size

Use:

- WebP
- AVIF
- optimized PNG/JPEG

when supported and appropriate.

---

36. ICONS

Use a consistent icon system.

Do not mix:

- outline icons
- filled icons
- 3D icons
- unrelated styles

without a clear design reason.

---

37. ANIMATION

Animations must be purposeful.

Preferred:

- subtle fade
- slide
- scale
- hover feedback
- loading feedback

Avoid:

- excessive motion
- constant background animation
- long transitions
- distracting effects

Respect reduced-motion preferences when applicable.

---

38. TRANSITION SPEED

UI transitions should feel fast and natural.

Avoid unnecessarily long animations.

Typical interaction transitions should generally remain around:

150ms – 300ms

Adjust when necessary.

---

39. ACCESSIBILITY

Use:

- semantic HTML
- ARIA only when necessary
- keyboard navigation
- visible focus
- readable text
- sufficient contrast
- meaningful labels
- alt text
- accessible forms

Accessibility must not be treated as an optional feature.

---

40. SEMANTIC HTML

Prefer:

<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

over unnecessary generic "<div>" structures.

---

41. SEO

Public pages should consider:

- "<title>"
- meta description
- canonical URL
- Open Graph
- proper heading hierarchy
- semantic HTML
- descriptive URLs
- image alt text
- structured data where appropriate
- sitemap
- robots.txt

---

42. PERFORMANCE

Prioritize:

- small assets
- optimized images
- lazy loading
- minimal JavaScript
- efficient CSS
- caching
- code splitting when appropriate
- minimal dependencies

Do not add libraries unnecessarily.

---

43. JAVASCRIPT

JavaScript should handle behavior.

Avoid putting large amounts of styling inside JavaScript.

Use modular functions.

Avoid global variables where possible.

Handle errors properly.

---

44. CSS

CSS should be organized and reusable.

Prefer:

- variables
- reusable classes
- component styles
- responsive rules

Avoid excessive inline styles.

---

45. HTML

HTML should provide structure and meaning.

Avoid:

- unnecessary nesting
- duplicated markup
- inaccessible controls
- invalid structure

---

46. COMPONENT ARCHITECTURE

Build reusable components such as:

Header
Hero
Button
Card
ServiceCard
ProductCard
Modal
Toast
Search
Footer
ContactHub

Avoid duplicating the same UI code across multiple pages.

---

47. FILE ORGANIZATION

Recommended structure:

neXa/
│
├── index.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logo/
│   └── fonts/
│
├── components/
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── main.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── components.js
│   └── utils.js
│
└── docs/

The exact structure may change when the project grows.

---

48. CODE QUALITY

Code must be:

- readable
- maintainable
- logically organized
- reusable
- documented where necessary

Do not add comments that simply repeat obvious code.

---

49. DEPENDENCY RULE

Before adding a library, ask:

1. Is it necessary?
2. Can native HTML/CSS/JS solve it?
3. Does it improve maintainability?
4. Does it increase bundle size?
5. Is it actively maintained?
6. Does it introduce security concerns?

If native code is sufficient, prefer native code.

---

50. SECURITY

Frontend code must never contain private secrets.

Never expose:

- passwords
- private API keys
- service-role keys
- private tokens

Sensitive operations must be handled securely.

---

51. RESPONSIVE TESTING

Before considering a UI complete, test at minimum:

Mobile

- 320px
- 360px
- 375px
- 390px
- 414px

Tablet

- 768px
- 820px

Desktop

- 1024px
- 1280px
- 1440px
- larger displays when appropriate

These are testing references, not mandatory fixed breakpoints.

---

52. BROWSER TESTING

When practical, test modern:

- Chrome
- Firefox
- Safari
- Edge

Mobile browser behavior must also be considered.

---

53. CONSOLE RULE

Production UI should not contain unexpected console errors.

Before deployment:

- check console
- check network failures
- check missing assets
- check JavaScript errors

Warnings should be reviewed when relevant.

---

54. BROKEN LINK RULE

Before production:

- test navigation
- test buttons
- test forms
- test external links
- test social links
- test CTAs

Do not publish known broken links.

---

55. ACCESSIBLE ERROR HANDLING

Errors must be visible and understandable.

Do not rely only on:

- color
- animation
- console messages

to communicate important problems.

---

56. UI CONSISTENCY

Use the same:

- button style
- card style
- spacing
- typography
- colors
- radius
- icon style
- interaction behavior

throughout the product.

---

57. DESIGN TOKENS

Where practical, define shared variables.

Example:

:root {
  --nexa-primary: #0B1F3A;
  --nexa-accent: #10B981;
  --nexa-white: #FFFFFF;

  --nexa-radius-sm: 6px;
  --nexa-radius-md: 10px;
  --nexa-radius-lg: 18px;

  --nexa-space-1: 4px;
  --nexa-space-2: 8px;
  --nexa-space-3: 12px;
  --nexa-space-4: 16px;
  --nexa-space-5: 24px;
  --nexa-space-6: 32px;
}

---

58. CONTENT UI

UI text must be:

- short
- clear
- useful
- understandable

Buttons should describe actions.

Headings should describe content.

Do not use unnecessary marketing phrases inside functional UI.

---

59. AI-GENERATED UI RULE

AI-generated UI must still follow this document.

AI must not introduce:

- random colors
- random fonts
- gradients
- unnecessary animations
- unrelated components
- excessive glassmorphism
- generic template layouts

unless explicitly requested.

---

60. EXISTING PROJECT RULE

When working on an existing neXa project:

1. Inspect first.
2. Understand current architecture.
3. Preserve existing functionality.
4. Reuse existing components.
5. Modify only necessary files.
6. Test after changes.

Never assume that rebuilding from scratch is better.

---

61. FEATURE IMPLEMENTATION RULE

For every new feature:

Requirement
↓
UX
↓
Component
↓
Implementation
↓
Responsive behavior
↓
Accessibility
↓
Testing
↓
Production

---

62. PRE-DEPLOYMENT CHECKLIST

Before deployment:

- [ ] Brand spelling verified
- [ ] Colors verified
- [ ] Tagline verified where applicable
- [ ] Mobile layout tested
- [ ] Desktop layout tested
- [ ] Navigation tested
- [ ] Buttons tested
- [ ] Forms tested
- [ ] Links tested
- [ ] Images tested
- [ ] Console checked
- [ ] Performance checked
- [ ] Accessibility checked
- [ ] Security checked
- [ ] No exposed secrets
- [ ] No unnecessary dependencies
- [ ] No unexpected errors

---

63. FINAL UI RULE

The best neXa interface is not the interface with the most effects.

The best neXa interface is the one that:

- looks professional
- works reliably
- loads quickly
- feels simple
- works on mobile
- is accessible
- is easy to maintain
- clearly helps the user accomplish a task

---

OFFICIAL neXa UI IDENTITY

Brand: neXa

Tagline: Build Faster. Create Smarter.

Primary: "#0B1F3A"

Accent: "#10B981"

Text: "#FFFFFF"

Theme: Dark by default

Design: Premium / Minimal / Modern / Futuristic

Layout: Mobile First

Default Gradient: None

---

END OF WEB UI RULES
