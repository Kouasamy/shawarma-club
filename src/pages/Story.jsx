import React from 'react';
import { useReveal, useCounter } from '../hooks/useAnimations';

const Story = () => {
  return (
    <div className="story-page">
      
      {/* Hero */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContent}>
          <h1 className="hero-title-mobile" style={{color: 'white', fontSize: '4rem', marginBottom: '16px', animation: 'heroSlideUp 1s ease forwards'}}>Notre Histoire</h1>
          <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', animation: 'heroSlideUp 1s 0.2s ease forwards', opacity: 0}}>
            De la passion à l'assiette, découvrez comment Le Shawarma Club est devenu le rendez-vous incontournable des amateurs de shawarma à Abidjan.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section style={{padding: '100px 0'}}>
        <div className="container responsive-grid" style={styles.originContainer}>
          <div className="hero-content-mobile"><OriginText /></div>
          <div className="hero-visual-mobile" style={{height: '400px'}}><OriginImage /></div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />
      
      {/* Stats */}
      <StatsSection />

    </div>
  );
};

const OriginText = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-left" style={styles.originText}>
      <h2 style={{fontSize: '2.5rem', marginBottom: '24px', color: 'var(--primary)'}}>Comment tout a commencé</h2>
      <div>
        <span style={styles.year}>2024</span>
        <p style={{fontSize: '1.1rem', color: '#555', lineHeight: 1.8}}>
          Au Shawarma Club 🌟, notre passion pour les saveurs authentiques nous a poussés à créer le meilleur shawarma d'Abidjan. Du pain libanais frais, des viandes marinées avec soin et notre sauce signature.
        </p>
        <p style={{fontSize: '1.1rem', color: '#555', lineHeight: 1.8, marginTop: '16px'}}>
          Situé à Cocody, Rue A24, Villa 4, nous livrons directement à votre porte — que ce soit au bureau, à l'école ou à la maison. 🌯✨
        </p>
      </div>
    </div>
  );
};

const OriginImage = () => {
  const revealRef = useReveal();
  return (
    <div ref={revealRef} className="reveal-right" style={styles.originImageWrap}>
      <img src="/images/shawarma-delivery-1.jpg" alt="Livraison Shawarma Club" style={styles.originImage} />
    </div>
  );
};

const ValuesSection = () => {
  const headerRef = useReveal();
  const values = [
    { num: '1', title: 'Pain Libanais frais', desc: "Notre pain est fait chaque jour pour garantir la fraîcheur et le croustillant." },
    { num: '2', title: 'Prix doux pour tous', desc: "Shawarma dès 1 000 F CFA. Le bon goût ne devrait pas être un luxe." },
    { num: '3', title: "100% Halal", desc: "Toutes nos viandes sont certifiées Halal. Qualité et respect au rendez-vous." },
  ];

  return (
    <section style={{backgroundColor: '#fafafa', padding: '100px 0', color: 'var(--text-dark)'}}>
      <div className="container" style={{textAlign: 'center'}}>
        <div ref={headerRef} className="reveal">
          <h2 style={{fontSize: '2.5rem', marginBottom: '64px', color: '#121212'}}>Nos Valeurs</h2>
        </div>
        <div className="responsive-grid" style={styles.valuesGrid}>
          {values.map((v, i) => <ValueCard key={i} {...v} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ num, title, desc, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal stagger-${index + 1}`} style={styles.valueCard}>
      <div style={styles.valueNumber}>{num}</div>
      <h3 style={{marginBottom: '16px', fontSize: '1.4rem'}}>{title}</h3>
      <p style={{color: '#666', lineHeight: 1.7}}>{desc}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section style={{padding: '100px 0', backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center'}}>
      <div className="container">
        <h2 style={{fontSize: '2.5rem', marginBottom: '64px', color: 'white'}}>Le Shawarma Club en chiffres</h2>
        <div className="responsive-grid" style={styles.statsGrid}>
          <CounterStat target={15000} suffix="+" label="Shawarmas vendus" />
          <CounterStat target={3000} suffix="+" label="Clients fidèles" />
          <DecimalCounterStat label="Note moyenne" />
          <CounterStat target={2} suffix=" ans" label="D'existence" />
        </div>
      </div>
    </section>
  );
};

/* Counter that goes from 0 to target integer */
const CounterStat = ({ target, suffix, label }) => {
  const { count, ref } = useCounter(target, 2500);
  return (
    <div ref={ref}>
      <div className="counter-number" style={styles.statNumber}>
        {count.toLocaleString('fr-FR')}{suffix}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
};

/* Special counter for 4.8/5 that counts from 0.0 to 4.8 */
const DecimalCounterStat = ({ label }) => {
  const { count, ref } = useCounter(48, 2500);
  return (
    <div ref={ref}>
      <div className="counter-number" style={styles.statNumber}>
        {(count / 10).toFixed(1)}/5
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
};

const styles = {
  heroSection: { height: '500px', backgroundImage: 'url(/images/shawarma-delivery-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(230,57,70,0.4) 100%)' },
  heroContent: { position: 'relative', zIndex: 10, textAlign: 'center' },
  originContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
  originText: { paddingRight: '32px' },
  year: { display: 'inline-block', fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '8px 20px', borderRadius: '8px', marginBottom: '24px' },
  originImageWrap: { borderRadius: '24px', overflow: 'hidden', height: '500px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)' },
  originImage: { width: '100%', height: '100%', objectFit: 'cover' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' },
  valueCard: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    backgroundColor: '#ffffff',
    padding: '40px', 
    borderRadius: '24px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.03)',
    border: '1px solid #eaedf2'
  },
  valueNumber: {
    width: '64px', 
    height: '64px', 
    backgroundColor: 'var(--primary-light)', 
    color: 'var(--primary)', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '1.8rem', 
    fontWeight: '800', 
    marginBottom: '24px', },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' },
  statNumber: { fontSize: '3.5rem', fontWeight: '800', marginBottom: '8px' },
  statLabel: { fontSize: '1.1rem', fontWeight: '600', opacity: 0.9 },
};

export default Story;
