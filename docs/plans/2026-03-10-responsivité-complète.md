# Plan d'implémentation - Responsive Design Professionnel

**Objectif :** Rendre le site Shawarma Club 100% responsive (Mobile & Tablette) avec une approche "Mobile First", incluant un configurateur de commande plein écran et un bouton de contact flottant.
**Architecture :** Utilisation de Media Queries CSS, Flexbox/Grid responsive, et animations fluides.
**Stack technique :** React, CSS3, Lucide Icons.

---

### Task 1 : Variables et Structure Globale (CSS)
**Fichier :** `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\index.css`

**Step 1 : Ajuster les espacements et la typographie de base**
- Modifier les paddings des sections pour le mobile.
- Ajuster les tailles de police globales via des variables.

### Task 2 : Navbar et Menu Mobile (Performance & UX)
**Fichiers :**
- `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\components\Navbar.jsx`
- `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\index.css`

**Step 1 : Menu Mobile Plein Écran**
- Passer le menu mobile en `position: fixed` à `100vh`.
- Ajouter un `backdrop-filter: blur(10px)`.
- Centrer le texte et augmenter la taille des liens.

### Task 3 : Hero Section "Impact Visuel"
**Fichier :** `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\pages\Home.jsx`

**Step 1 : Inversion Ordre (Image d'abord)**
- Sur mobile (< 768px), forcer l'image du shawarma à s'afficher en haut.
- Réduire le titre de `3.8rem` à `2.5rem`.
- Empiler les boutons verticalement si nécessaire.

### Task 4 : Grilles de Produits Responsive
**Fichiers :**
- `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\pages\Home.jsx`
- `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\pages\Menu.jsx`

**Step 1 : Adaptation des colonnes**
- Mobile : 1 colonne (1fr).
- Tablette : 2 colonnes (repeat(2, 1fr)).
- Desktop : 3 colonnes.

### Task 5 : Configurateur (Modal) Mobile First
**Fichiers :**
- `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\pages\Menu.jsx` (et Home.jsx)

**Step 1 : Modal Plein Écran**
- Sur mobile, la modal prend tout l'espace.
- Le bouton "Valider" devient `sticky` en bas de l'écran pour rester accessible durant la personnalisation.

### Task 6 : Bouton de Contact Flottant (Nouveauté)
**Fichier :** `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\pages\Home.jsx` 

**Step 1 : Bouton flottant WhatsApp**
- Créer un bouton rond flottant en bas à droite (`fixed`).
- Visible uniquement sur mobile (`display: none` sur desktop).

### Task 7 : Footer et Finalisation
**Fichier :** `C:\Users\Sam_k\OneDrive\Bureau\Projets & Travail\shawarma-club\src\components\Footer.jsx`

**Step 1 : Empilement Vertical**
- Passer la grille du footer de 3 colonnes à 1 colonne sur mobile.
- Centrer les textes et les icônes sociales.

---

### Commandes de vérification :
1. `npm run dev` (Déjà en cours)
2. Utilisation du Browser Subagent pour tester les résolutions 390px (Mobile) et 820px (Tablette).
