import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCent, UtensilsCrossed, ShieldCheck, Truck, ArrowRight, Star, Quote, Minus, Plus, X, ShoppingBag, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReveal, useCounter } from '../hooks/useAnimations';

const Home = () => {

  useEffect(() => {
    // Start explosion after 800ms
    const timer = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: 0.75, y: 0.5 }, // Right side where the visual is
        colors: ['#f2590d', '#ffffff', '#ffd700'],
        zIndex: 1000,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = [
    { id: 1, name: 'Chicken Club 🍗', price: '1000', priceNum: 1000, desc: "Pain Libanais • Poulet • Frites • Légumes • Sauce assaisonnement", img: "/images/shawarma-close.jpg" },
    { id: 2, name: 'Beef Club 🍖', price: '1000', priceNum: 1000, desc: "Pain Libanais • Boulettes de viande / Rognon • Frites • Légumes • Sauce", img: "/images/shawarma-signature.jpg" },
    { id: 3, name: 'Mix Club 😎', price: '1500', priceNum: 1500, desc: "Pain Libanais • Boulettes de viande, poulet et rognon • Frites • Sauce", img: "/images/shawarma-tray.jpg" },
  ];

  return (
    <div className="home-page">
      
      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{...styles.heroSection, position: 'relative'}}>
        <div className="container hero-responsive" style={{...styles.heroContainer, position: 'relative', zIndex: 1}}>
          <div className="hero-content-mobile" style={styles.heroContent}>
            <div style={{...styles.badge, animation: 'bounceIn 0.6s ease forwards'}}>
              🌯 Le Meilleur Shawarma d'Abidjan
            </div>
            <h1 className="hero-title-mobile" style={styles.heroTitle}>
              Savourez l'art du <span style={{color: '#f2590d', position: 'relative'}}>Shawarma</span> authentique dès <span style={{color: '#f2590d', whiteSpace: 'nowrap'}}>1 000 F</span>
            </h1>
            <p style={{...styles.heroSubtitle, fontSize: '1.25rem', fontWeight: '500', color: '#444', maxWidth: '800px'}}>
              Au Shawarma Club, dégustez un shawarma généreux avec du pain libanais frais, des viandes marinées et notre sauce secrète. Livré directement à votre porte à Abidjan. 🌯✨
            </p>
            <div style={styles.heroBtns}>
              <a href="https://wa.me/message/UFUEWJAI4FTED1" target="_blank" rel="noopener noreferrer" className="btn btn-primary glow-btn" style={{padding: '16px 32px', fontSize: '1.1rem', flex: '1 1 auto', textAlign: 'center'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" style={{width: 22, height: 22}} />
                WhatsApp
              </a>
              <Link to="/menu" className="btn btn-outline" style={{padding: '16px 32px', fontSize: '1.1rem', flex: '1 1 auto', textAlign: 'center'}}>
                Voir le menu
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Hero Visual Container */}
          <div className="hero-visual-mobile" style={styles.heroConfettiContainer}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/images/shawarma-signature.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 242, 236, 0.2)',
                zIndex: 1
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section style={styles.featureSection}>
        <div className="container responsive-grid" style={styles.featureContainer}>
          {[
            { icon: <BadgeCent size={28} color="#f2590d" />, title: "Prix doux", desc: "Shawarma dès 1 000 FCFA" },
            { icon: <UtensilsCrossed size={28} color="#f2590d" />, title: "Pain Libanais", desc: "Fait frais chaque jour" },
            { icon: <ShieldCheck size={28} color="#f2590d" />, title: "100% Halal", desc: "Qualité & fraîcheur garanties" },
            { icon: <Truck size={28} color="#f2590d" />, title: "Livraison rapide", desc: "Chez vous, au bureau, à l'école" },
          ].map((feat, i) => (
            <FeatureCard key={i} {...feat} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════ MENU SECTION ═══════════════ */}
      <section style={styles.menuSection}>
        <div className="container">
          <SectionHeader />
          <div className="responsive-grid" style={styles.menuGrid}>
            {featuredProducts.map((p, i) => (
              <ProductCard 
                key={p.id}
                image={p.img}
                title={p.name}
                desc={p.desc}
                price={p.price}
                index={i}
              />
            ))}
          </div>
          <MenuCta />
        </div>
      </section>

      {/* ═══════════════ PACK COMBO ═══════════════ */}
      <PackComboSection />

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <TestimonialsSection />

      {/* ═══════════════ FLOATING CONTACT ═══════════════ */}
      <a 
        href="https://wa.me/message/UFUEWJAI4FTED1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp-mobile glow-btn"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" style={{width: 32, height: 32}} />
      </a>

    </div>
  );
};

/* ─── Sub-components ─── */

const FeatureCard = ({ icon, title, desc, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal stagger-${index + 1}`} style={styles.featureCard}>
      <div style={styles.featureIconWrap}>{icon}</div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureDesc}>{desc}</p>
    </div>
  );
};

const SectionHeader = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={styles.sectionHeader}>
      <span style={styles.sectionLabel}>La Carte</span>
      <h2 style={styles.sectionTitle}>Découvre nos classiques</h2>
      <p style={styles.sectionDesc}>Choisis ton camp : Poulet, Boeuf ou Mix. Attention, c'est addictif.</p>
    </div>
  );
};

const ProductCard = ({ image, title, desc, price, index }) => {
  const revealRef = useReveal();
  return (
    <div ref={revealRef} className={`card reveal stagger-${index + 1}`} style={styles.menuCard}>
      <div className="img-zoom-wrap" style={styles.menuCardImgWrap}>
        <img src={image} alt={title} style={styles.menuCardImg} />
        <div className="price-shimmer" style={styles.priceTag}>{price} F CFA</div>
      </div>
      <div style={styles.menuCardBody}>
        <h3 style={styles.menuCardTitle}>{title}</h3>
        <p style={styles.menuCardDesc}>{desc}</p>
        <a href="https://wa.me/message/UFUEWJAI4FTED1" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{...styles.menuCardBtn, display: 'inline-block', textAlign: 'center'}}>
          Commander
        </a>
      </div>
    </div>
  );
};

const MenuCta = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={styles.menuCta}>
      <Link to="/menu" style={styles.menuLink}>
        Voir toutes les formules et boissons
        <ArrowRight size={20} />
      </Link>
    </div>
  );
};

const PackComboSection = () => {
  const ref = useReveal();
  return (
    <section style={styles.comboSection}>
      <video autoPlay muted loop playsInline style={styles.comboVideo}>
        <source src="/videos/pack-combo-bg.mp4" type="video/mp4" />
      </video>
      <div style={styles.comboOverlay}></div>
      <div className="container" style={styles.comboContent}>
        <div ref={ref} className="reveal" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
          <span style={{...styles.badge, backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)'}}>
            🔥 Offre spéciale
          </span>
          <h2 style={{...styles.comboTitle, fontFamily: "'Six Hands Black', cursive"}}>Le Pack Combo</h2>
          <p style={{fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', lineHeight: 1.7}}>
            5 shawarmas au choix + 2 boissons fraîches 33cl
          </p>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px'}}>
            <span style={{fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through'}}>6 000 F</span>
            <span style={{fontSize: '3.5rem', fontWeight: '800', color: '#ffffff', textShadow: '0 0 30px rgba(230,57,70,0.6)'}}>5 000 F CFA</span>
          </div>
          <a href="https://wa.me/message/UFUEWJAI4FTED1" target="_blank" rel="noopener noreferrer" className="btn glow-btn" style={{padding: '18px 48px', fontSize: '1.15rem', fontWeight: '700', backgroundColor: 'var(--primary)', color: 'white', boxShadow: '0 8px 32px rgba(230,57,70,0.5)', display: 'inline-block'}}>
            Commander le Pack
          </a>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const ref = useReveal();
  const testimonials = [
    { name: "Marie K.", role: "Cliente Fidèle", text: "Sincèrement le meilleur rapport qualité prix d'Abidjan. Le pain libanais est frais, la viande a du goût. Je recommande le Mix Club !" },
    { name: "Jean Y.", role: "Local Guide", text: "Livraison super rapide sur Riviera. C'est arrivé chaud. Le shawarma poulet est une tuerie." },
    { name: "Sarah B.", role: "Food Blogger", text: "Service client au top sur WhatsApp. Très réactif. Les prix sont imbattables pour cette qualité." },
  ];
  return (
    <section style={{padding: '100px 0', backgroundColor: '#fafafa'}}>
      <div className="container">
        <div ref={ref} className="reveal" style={{textAlign: 'center', marginBottom: '64px'}}>
          <span style={styles.sectionLabel}>Témoignages</span>
          <h2 style={{...styles.sectionTitle, color: 'var(--text-dark)'}}>Ils ont goûté, ils ont validé ⭐️</h2>
        </div>
        <div className="responsive-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px'}}>
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`card reveal stagger-${index + 1}`} style={{padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'white', border: '1px solid #eaedf2', boxShadow: '0 4px 12px rgba(0,0,0,0.03)'}}>
      <div style={{display: 'flex', gap: '4px', marginBottom: '16px'}}>
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />)}
      </div>
      <Quote size={24} color="var(--primary)" style={{marginBottom: '16px', opacity: 0.15}} />
      <p style={{color: '#666', fontSize: '1.05rem', lineHeight: 1.8, flexGrow: 1, fontStyle: 'italic'}}>"{text}"</p>
      <div style={{marginTop: '24px', borderTop: '1px solid #eaedf2', paddingTop: '16px'}}>
        <p style={{fontWeight: '700', color: 'var(--text-dark)'}}>{name}</p>
        <p style={{color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem'}}>{role}</p>
      </div>
    </div>
  );
};


/* ─── Styles ─── */
const styles = {
  heroSection: { padding: '80px 0 60px', overflow: 'hidden' },
  heroContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
  heroContent: { display: 'flex', flexDirection: 'column', gap: '20px', animation: 'heroSlideUp 1s ease forwards' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '999px', fontWeight: '700', fontSize: '0.9rem', alignSelf: 'flex-start' },
  heroTitle: { fontSize: '3.8rem', lineHeight: 1.08, letterSpacing: '-0.03em' },
  heroSubtitle: { fontSize: '1.15rem', color: '#666', maxWidth: '520px', lineHeight: 1.7 },
  heroBtns: { display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' },
  heroConfettiContainer: { 
    height: '550px', 
    borderRadius: '24px', 
    backgroundColor: 'var(--primary-light)', 
    overflow: 'hidden', 
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  confettiPlaceholder: {
    textAlign: 'center',
    animation: 'fadeIn 1s ease forwards'
  },

  featureSection: { backgroundColor: '#fafafa', padding: '80px 0' },
  featureContainer: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' },
  featureCard: { textAlign: 'center', padding: '32px 24px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' },
  featureIconWrap: { width: '64px', height: '64px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' },
  featureTitle: { fontSize: '1.2rem', marginBottom: '8px' },
  featureDesc: { color: '#666', fontSize: '0.9rem' },

  menuSection: { padding: '100px 0' },
  sectionHeader: { textAlign: 'center', marginBottom: '64px', maxWidth: '600px', margin: '0 auto 64px auto' },
  sectionLabel: { color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem', fontWeight: '800' },
  sectionTitle: { fontSize: '2.5rem', fontWeight: '800', color: '#121212', marginBottom: '16px', marginTop: '8px', lineHeight: 1.2 },
  sectionDesc: { color: '#666', fontSize: '1.1rem' },

  menuGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' },
  menuCard: { display: 'flex', flexDirection: 'column', height: '100%' },
  menuCardImgWrap: { position: 'relative', height: '240px' },
  menuCardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  priceTag: { position: 'absolute', top: '16px', right: '16px', backgroundColor: '#ffffff', color: 'var(--primary)', fontWeight: '800', padding: '8px 16px', borderRadius: '999px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '1.05rem' },
  menuCardBody: { padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  menuCardTitle: { fontSize: '1.4rem', marginBottom: '12px' },
  menuCardDesc: { color: '#666', marginBottom: '24px', flexGrow: 1, lineHeight: 1.7 },
  menuCardBtn: { width: '100%', padding: '14px', fontWeight: '700' },
  menuCta: { textAlign: 'center' },
  menuLink: { display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem' },

  comboSection: { padding: '0', position: 'relative', overflow: 'hidden', minHeight: '550px', display: 'flex', alignItems: 'center' },
  comboVideo: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 },
  comboOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(230,57,70,0.4) 100%)', zIndex: 1 },
  comboContent: { position: 'relative', zIndex: 2, padding: '100px 24px' },
  comboTitle: { fontSize: '4rem', marginBottom: '16px', color: 'white' }
};

export default Home;
