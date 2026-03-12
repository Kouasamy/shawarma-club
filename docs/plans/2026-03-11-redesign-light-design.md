# Conception du "Nouveau Look Régulier" (Light & Fresh) & Parcours WhatsApp

## 1. Objectif et Contexte
Adopter l'Option B ("Light & Fresh") pour le design entier du Shawarma Club. Cela implique de repenser l'utilisation des couleurs pour s'aligner exactement sur l'essence du logo (Un Rouge vibrant et un Noir très doux), et fluidifier le parcours client en supprimant les modals de sélection fastidieuses pour aller directement à la discussion WhatsApp (prise en charge par l'entreprise).

## 2. Décisions de Design (UI/UX)
- **Palette de Couleurs** :
  - **Couleur Primaire** : Un **Rouge pur et énergétique** directement extrait du logo (ex: `#E52E2D` / `#FF2A2A`). Finis les vieux dégradés orange.
  - **Couleur du Texte** : Un **Noir doux** (Soft Black, ex: `#2A2A2A` ou `#222222`). Il offre un contraste lisible sans être aussi dur à l'œil qu'un `#000000` classique.
  - **Couleurs de Fond** : Blanc pur `#FFFFFF` pour les cartes, et un blanc légèrement cassé ultra-doux (ex: `#FAFAFA` ou `#FFFDFD`) pour les sections, gardant l'interface très fraîche.
- **Typographie** :
  - Utilisation de la police `six-hands-black` pour les Titres (H1, H2, certains boutons).
  - Utilisation de la police `yebenjamin-regular` pour le reste du contenu textuel.
- **Micro-Interactions** : Tous les éléments interagibles (cartes, boutons) auront un léger effet de flottement (hover) pour un design professionnel et vivant, sans tomber dans le "Skeuomorphisme" (pas de 3D lourde).

## 3. Parcours Utilisateur (UX sans Modal)
1. L'utilisateur parcourt le Menu ou l'Accueil.
2. Lorsqu'il clique sur "Commander" sur un produit, **aucun modal ne s'ouvre**.
3. À la place, il est automatiquement redirigé vers l'application WhatsApp de l'entreprise.
4. Le message est **pré-généré et dynamique**.
   - *Exemple* : "Bonjour le Shawarma Club ! J'aimerais commander : 1x Beef Club. (Provenant du site web)"
   - Cela allège considérablement le site, évite les bugs de modal sur certains écrans et donne directement le contact humain que les clients ivoiriens aiment, tout en préremplissant le produit pour faire gagner du temps.

## 4. Composants affectés
- `src/index.css` (Polices, Variables de couleurs)
- `src/pages/Home.jsx` (Suppression partielle de la logique modal, intégration lien WhatsApp)
- `src/pages/Menu.jsx` (Suppression intégrale du `<OrderModal>`, génération de l'URL WhatsApp au clic)
- `src/components/Navbar.jsx` & `Footer.jsx` (Ajustement des couleurs)
