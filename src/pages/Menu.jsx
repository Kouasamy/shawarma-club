import React, { useState } from 'react';
import { useReveal } from '../hooks/useAnimations';
import { Minus, Plus, X, ShoppingBag, Check } from 'lucide-react';

const CATEGORIES = ["Tous", "Shawarmas", "Formules", "Boissons"];

const shawarmas = [
  { id: 1, category: 'Shawarmas', name: 'Chicken Club 🍗', price: '1000', priceNum: 1000, desc: "Le classique indétrônable au poulet ✨", img: "/images/shawarma-close.jpg" },
  { id: 2, category: 'Shawarmas', name: 'Beef Club 🍖', price: '1000', priceNum: 1000, desc: "La puissance du bœuf marinée ✨", img: "/images/shawarma-signature.jpg" },
  { id: 3, category: 'Shawarmas', name: 'Mix Club 😎', price: '1500', priceNum: 1500, desc: "Le meilleur des deux mondes ✨", img: "/images/shawarma-tray.jpg" },
];

const formules = [
  { id: 4, category: 'Formules', name: 'Pack Combo 🔥', price: '5000', priceNum: 5000, oldPrice: '6000', desc: "5 shawarmas + 2 boissons (33cl)", img: "/images/pack-combo.jpg" },
];

const boissons = [
  { id: 5, category: 'Boissons', name: 'Coca Cola', price: '500', priceNum: 500, desc: "Canette 33cl glacée.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800" },
  { id: 6, category: 'Boissons', name: 'Eau Celeste', price: '150', priceNum: 150, desc: "Eau minérale naturelle.", img: "/images/eau-celeste.jpg" },
  { id: 7, category: 'Boissons', name: 'Menthe au Lait 🥛', price: '500', priceNum: 500, desc: "Une tradition rafraîchissante.", img: "/images/menthe-au-lait.jpg" },
];

const allItems = [...shawarmas, ...formules, ...boissons];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Tous");
  const headerRef = useReveal();

  const filteredItems = activeTab === "Tous" 
    ? allItems 
    : allItems.filter(item => item.category === activeTab);

  return (
    <div className="menu-page">
      <section style={styles.headerSection}>
        <div className="container" ref={headerRef} style={{textAlign: 'center'}}>
          <h1 style={styles.pageTitle}>La Carte du Club</h1>
          <p style={styles.pageSubtitle}>Sélectionnez vos favoris et personnalisez votre commande en un clic.</p>
        </div>
      </section>

      <section style={{paddingTop: 0, paddingBottom: 60}}>
        <div className="container">
          <div style={styles.tabsContainer}>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === cat ? styles.tabBtnActive : {})
                }}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="responsive-grid" style={styles.menuGrid}>
            {filteredItems.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Pack Combo with Video Background */}
      <section style={styles.promoSection}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={styles.promoVideo}
        >
          <source src="/videos/pack-combo-bg.mp4" type="video/mp4" />
        </video>
        <div style={styles.promoOverlay}></div>
        <div className="container" style={styles.promoContent}>
          <span style={styles.promoLabel}>Offre de Groupe</span>
          <h2 style={{...styles.promoTitle, fontFamily: "'Six Hands Black', cursive"}}>Le Pack Combo 🔥</h2>
          <p style={styles.promoText}>Idéal pour vos soirées, le pack contient 5 shawarmas au choix et 2 boissons fraîches.</p>
          <div style={styles.promoPriceRow}>
             <span style={styles.oldPriceTag}>6 000 F</span>
             <span style={styles.newPriceTag}>5 000 F CFA</span>
          </div>
          <a
            href="https://wa.me/message/UFUEWJAI4FTED1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary glow-btn" 
            style={{padding: '16px 40px', fontSize: '1.2rem', display: 'inline-block', textDecoration: 'none'}}
          >
            Commander le Pack
          </a>
        </div>
      </section>
    </div>
  );
};

const MenuCard = ({ item, index }) => {
  const revealRef = useReveal();
  return (
    <div ref={revealRef} className={`card reveal stagger-${(index % 3) + 1}`} style={styles.menuCard}>
      <div className="img-zoom-wrap" style={styles.menuCardImgWrap}>
        <img src={item.img} alt={item.name} style={styles.menuCardImg} />
        <div className="price-shimmer" style={styles.priceTag}>
          {item.oldPrice && <span style={{textDecoration: 'line-through', color: '#999', marginRight: 8, fontSize: '0.85rem'}}>{item.oldPrice} F</span>}
          {item.price} F CFA
        </div>
      </div>
      <div style={styles.menuCardBody}>
        <h3 style={styles.menuCardTitle}>{item.name}</h3>
        <p style={styles.menuCardDesc}>{item.desc}</p>
        <a 
          href="https://wa.me/message/UFUEWJAI4FTED1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary" 
          style={{...styles.menuCardBtn, display: 'inline-block', textAlign: 'center', textDecoration: 'none'}}
        >
          Commander
        </a>
      </div>
    </div>
  );
};

const styles = {
  headerSection: { padding: '80px 0 40px', backgroundColor: '#fafafa' },
  pageTitle: { fontSize: '3.5rem', marginBottom: '16px' },
  pageSubtitle: { fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 },
  tabsContainer: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', margin: '40px 0 64px' },
  tabBtn: { padding: '12px 28px', fontSize: '1rem', fontWeight: '600', color: '#666', backgroundColor: 'transparent', borderBottom: '3px solid transparent', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', borderRadius: '0', cursor: 'pointer' },
  tabBtnActive: { color: 'var(--primary)', borderBottom: '3px solid var(--primary)', backgroundColor: 'var(--primary-light)', borderRadius: '8px 8px 0 0' },
  menuGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px', marginBottom: '40px' },
  menuCard: { display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'white' },
  menuCardImgWrap: { position: 'relative', height: '240px' },
  menuCardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  priceTag: { position: 'absolute', top: '16px', right: '16px', backgroundColor: '#ffffff', color: 'var(--primary)', fontWeight: '800', padding: '8px 16px', borderRadius: '999px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '1rem' },
  menuCardBody: { padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  menuCardTitle: { fontSize: '1.4rem', marginBottom: '12px' },
  menuCardDesc: { color: '#666', marginBottom: '24px', flexGrow: 1, lineHeight: 1.7 },
  menuCardBtn: { width: '100%', padding: '14px', fontWeight: '700', borderRadius: '12px' },
  
  // Promo Section
  promoSection: { position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', color: 'white' },
  promoVideo: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 },
  promoOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))', zIndex: 1 },
  promoContent: { position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' },
  promoLabel: { backgroundColor: 'var(--primary)', color: 'white', padding: '8px 16px', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '700', marginBottom: '16px', display: 'inline-block' },
  promoTitle: { fontSize: '4rem', marginBottom: '16px' },
  promoText: { fontSize: '1.2rem', marginBottom: '32px', color: 'rgba(255,255,255,0.9)' },
  promoPriceRow: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px' },
  oldPriceTag: { fontSize: '1.5rem', textDecoration: 'line-through', color: 'rgba(255,255,255,0.6)' },
  newPriceTag: { fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }
};

export default Menu;
