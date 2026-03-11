# Shawarma Club Redesign & Modal Fix Plan

**Goal:** Correct the modal visibility issue for complex products and align the entire site with the logo's "Premium Red & Black" identity.
**Architecture:** 
- Centralize colors in CSS variables for easy maintenance.
- Refactor the Modal component to split Header, Scrollable Content, and Fixed Footer.
- Apply the new color palette across all pages (Home, Menu, Story, Delivery).
**Tech Stack:** React, CSS Variables, Lucide Icons.

---

### Task 1: Update Global Design Tokens (Colors & Fonts)
**Files:**
- Modify: `src/index.css`

**Steps:**
1. Update `:root` variables:
   - `--primary`: Change from orange to Logo Red (`#E63946`).
   - `--primary-light`: Change to a soft red tint.
   - `--dark-premium`: Add `#121212` for premium black backgrounds.
2. Update global styles for titles and text using the new fonts:
   - Titles: `font-family: 'Six Hands Black', sans-serif;`
   - Body: `font-family: 'yebenjamin-regular', sans-serif;`
3. Fix the Modal CSS structure:
   - `.modal-standard-size`: Ensure flex layout.
   - `.modal-details-scroll`: Limit height and add overflow.
   - `.modal-footer-fixed`: New class for a footer that stays visible.

---

### Task 2: Refactor Modal Structure (Home & Menu)
**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `src/pages/Menu.jsx`

**Steps:**
1. Update the `OrderModal` component structure:
   - Move the "Prix total" and "Valider" buttons OUT of the scrollable container.
   - Ensure the image remains on the left (desktop) or top (mobile) correctly.
2. Replace hardcoded `#f2590d` with `var(--primary)`.

---

### Task 3: Apply the "Premium Design" Palette across the Site
**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/pages/Home.jsx` (Hero, Features, Testimonials)
- Modify: `src/pages/Story.jsx`
- Modify: `src/pages/Delivery.jsx`

**Steps:**
1. Switch sections to "Premium Black" funds as requested.
   - Specifically: Hero background (overlay), Testimonials section, Footer.
2. Replace all remaining orange instances with the new red variable.
3. Verify visual hierarchy and contrast.

---

### Task 4: Final Verification
**Steps:**
1. Verify "Chicken Club" and "Pack Combo" modals in browser.
2. Check color harmony with the logo.
3. Validate typography application.
