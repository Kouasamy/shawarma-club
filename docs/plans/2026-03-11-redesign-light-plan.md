# [Redesign & Direct WhatsApp] Implementation Plan

**Goal:** Implémenter le design "Light & Fresh", supprimer définitivement les systèmes de Modals de sélection fastidieux pour le Menu/Accueil, et remplacer l'action d'achat par une redirection directe vers WhatsApp avec un texte de pré-commande automatisé contenant le nom du produit. L'ajustement inclura les couleurs du logo (Rouge `#E11E26`, ou similaire, et gris foncé `#1F1F1F` pour le texte), et l'intégration des typos locales.
**Architecture:** Direct HTML/CSS color updates using `index.css` root variables. Migration of `onClick` from `setOrderModal(product)` to `window.open(whatsappUrl)`.
**Tech Stack:** React, CSS Variables, WhatsApp Click-to-Chat API.
---

### Task 1: Update Global Design System (CSS)
**Files:**
- Modify: `src/index.css`

**Step 1:** Delete any `OrderModal` specific styling logic if they take up too much space, though not strictly required, we can just leave it or clean it up. We will change the CSS Variables.
**Step 2:** Open `src/index.css` and update `:root`:
- Change `--primary-color` to a vibrant red matching the logo (e.g., `#E32626`).
- Change `--bg-color` to `#FAFAFA` for a clean light back.
- Change `--text-color` to `#1A1A1A` for a soft black.
- Add `@font-face` for `six-hands-black` and `yebenjamin-regular`.
**Step 3:** Commit "feat(design): apply Light & Fresh theme with Logo red and soft black"

### Task 2: Implement Direct WhatsApp Order & Remove Modals (Home Page)
**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `src/utils/whatsapp.js` (si existant, sinon inclure la logique en in-line)

**Step 1:** In `Home.jsx`, select the `handleOrder` function or `onClick` on "Commander" buttons.
**Step 2:** Remove the `OrderModal` component and its associated state (`selectedProduct`, `isModalOpen`).
**Step 3:** Implement an `orderProductDirect(product)` function that generates this URL:
`const message = encodeURIComponent("Bonjour le Shawarma Club ! J'aimerais commander : " + product.name);`
`window.open("https://wa.me/225000000000?text=" + message, "_blank");`
*(Note: Replace with standard Phone Number variable).*
**Step 4:** Commit "feat(home): replace order modal with direct whatsapp checkout"

### Task 3: Implement Direct WhatsApp Order & Remove Modals (Menu Page)
**Files:**
- Modify: `src/pages/Menu.jsx`

**Step 1:** Delete the huge `<OrderModal />` component from `Menu.jsx` down to its state logic (`selectedItem`, etc).
**Step 2:** Change `onClick={() => setSelectedItem(item)}` on the "Commander" buttons to use the direct WhatsApp method:
`const msg = encodeURIComponent("Bonjour ! Je souhaite commander depuis le site : " + item.name);`
`window.open("https://wa.me/0000000?text=" + msg, "_blank");`
**Step 3:** Commit "feat(menu): remove modal and use direct whatsapp checkout"

### Task 4: UI Refinements
**Files:**
- Modify: `src/components/Navbar.jsx`, `src/components/Footer.jsx`

**Step 1:** Adjust any hardcoded `#f2590d` orange values to use `var(--primary-color)`.
**Step 2:** Verify heading fonts to ensure `six-hands-black` is globally applied to `h1, h2, h3` in CSS, and `yebenjamin-regular` to `p, span, div` where appropriate.
**Step 3:** Commit "style(global): refine UI elements with red and fast cart checkout"
