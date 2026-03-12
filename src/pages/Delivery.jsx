import { MapPin, Phone, Mail, Clock, ShoppingCart, Info } from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';
import SEO from '../components/SEO';

const Delivery = () => {
  return (
    <div className="delivery-page">
      <SEO 
        title="Livraison & Contact" 
        description="Commandez votre shawarma en ligne via WhatsApp ou Yango Deli. Nous livrons à Cocody, Riviera, Marcory et partout à Abidjan. Retrouvez nos horaires et notre adresse."
        url="/livraison"
      />
      
      {/* Header */}
      <section style={styles.headerSection}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 className="hero-title-mobile" style={styles.pageTitle}>Livraison & Contact</h1>
          <p style={styles.pageSubtitle}>Commandez facilement et recevez votre shawarma tout chaud chez vous à Abidjan.</p>
        </div>
      </section>

      {/* Delivery Options */}
      <section style={{paddingTop: 0}}>
        <div className="container responsive-grid" style={styles.optionsContainer}>
          <WhatsAppCard />
          <PartnersCard />
        </div>
      </section>

      {/* Zones */}
      <ZonesSection />
      
      {/* Contact */}
      <ContactSection />
    </div>
  );
};

const WhatsAppCard = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="card reveal-left" style={styles.optionCard}>
      <div style={styles.optionHeader}>
        <div style={styles.iconBg}><Phone size={24} color="var(--primary)" /></div>
        <h2 style={{fontSize: '1.4rem', marginTop: '16px'}}>Commande via WhatsApp</h2>
      </div>
      <div style={styles.optionBody}>
        <ol style={styles.stepList}>
          {["Consultez le menu", "Envoyez votre commande", "Confirmez votre adresse", "Payez à la livraison"].map((step, i) => (
            <li key={i} style={styles.stepItem}><span style={styles.stepNum}>{i + 1}</span> {step}</li>
          ))}
        </ol>
      </div>
      <div style={styles.optionFooter}>
        <a href="https://wa.me/2250719264924" target="_blank" rel="noopener noreferrer" className="btn btn-primary glow-btn" style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px'}}>
          <ShoppingCart size={20} /> Commander au prix Club
        </a>
      </div>
    </div>
  );
};

const PartnersCard = () => {
  const ref = useReveal();
  const yangoLink = "https://yango.go.link/external?service=eats&href=/restaurant/le_shawarma_club?utm_campaign=yangodeli_app_ios&utm_medium=referral&utm_source=rst_shared_link";
  
  return (
    <div ref={ref} className="card reveal-right" style={styles.optionCard}>
      <div style={styles.optionHeader}>
        <div style={styles.iconBg}><TruckIcon /></div>
        <h2 style={{fontSize: '1.4rem', marginTop: '16px'}}>Via nos Partenaires</h2>
      </div>
      <div style={styles.optionBody}>
        <p style={{color: '#666', marginBottom: '24px'}}>Retrouvez-nous sur Yango Deli pour une commande rapide via application :</p>
        <div style={styles.partnerList}>
          <a href={yangoLink} target="_blank" rel="noopener noreferrer" style={{...styles.partnerItem, display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text-dark)'}}>
            <img src="/images/YangoDeli.png" alt="Yango Deli" style={{width: '36px', height: '36px', objectFit: 'contain', borderRadius: '8px'}} />
            Yango Deli
          </a>
        </div>
        
        {/* Warning Message */}
        <div style={{
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: '#fff9f5', 
          borderRadius: '12px', 
          border: '1px solid #ffe8d9',
          display: 'flex',
          gap: '12px'
        }}>
          <Info size={20} color="var(--primary)" style={{flexShrink: 0}} />
          <p style={{fontSize: '0.9rem', color: '#8d3a12', lineHeight: '1.5'}}>
            <strong>Note :</strong> Les prix sont majorés sur Yango Deli suite aux taxes de service de la plateforme. 
            Les prix officiels sont toujours disponibles en commandant via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

const ZonesSection = () => {
  const ref = useReveal();
  const zones = [
    { name: 'Cocody', time: '15-25 min' },
    { name: 'Riviera', time: '20-30 min' },
    { name: 'Marcory', time: '25-35 min' },
    { name: 'Plateau', time: '20-30 min' },
    { name: 'Yopougon', time: '30-45 min' },
  ];
  return (
    <section style={{backgroundColor: '#fafafa', padding: '100px 0'}}>
      <div className="container responsive-grid" style={styles.zonesContainer}>
        <div ref={ref} className="reveal-left">
          <h2 style={{fontSize: '2.5rem', marginBottom: '32px'}}>Nos Zones</h2>
          <ul style={styles.zonesList}>
            {zones.map(z => (
              <li key={z.name} style={styles.zoneItem}><span>{z.name}</span> <span style={styles.zoneTime}>{z.time}</span></li>
            ))}
          </ul>
          <p style={{color: '#888', fontStyle: 'italic', fontSize: '0.95rem'}}>*Frais : 1 000 – 1 500 FCFA</p>
        </div>
        <MapCard />
      </div>
    </section>
  );
};

const MapCard = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-right" style={styles.mapPlaceholder}>
      <iframe
        title="Le Shawarma Club - Cocody, Abidjan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-4.00377!3d5.33147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknNTMuMyJOIDTCsDAwJzEzLjYiVw!5e0!3m2!1sfr!2sci!4v1709000000000"
        width="100%"
        height="100%"
        style={{border: 0, borderRadius: '16px'}}
        allowFullScreen
        loading="lazy"
      />
      <div style={styles.mapLabel}>📍 Cocody, Rue A24, Villa 4</div>
    </div>
  );
};

const ContactSection = () => {
  const visualRef = useReveal();
  const sidebarRef = useReveal();
  return (
    <section style={{padding: '100px 0'}}>
      <div className="container responsive-grid" style={styles.contactContainer}>
        
        {/* Colonne Gauche : Vidéo au lieu du 3D */}
        <div ref={visualRef} className="reveal-left hero-content-mobile" style={styles.visualWrapper}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>Des questions ?</h2>
          <div className="hero-visual-mobile" style={styles.canvasContainer}>
            <video 
              src="/videos/shawarma-contact.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
            />
          </div>
          <div style={{marginTop: '40px', marginBottom: '24px', textAlign: 'center'}}>
             <a href="https://wa.me/2250719264924" target="_blank" rel="noopener noreferrer" className="btn glow-btn" style={{padding: '16px 32px', backgroundColor: '#25D366', color: 'white', fontWeight: '700'}}>
               Discuter sur WhatsApp
             </a>
          </div>
        </div>

        {/* Colonne Droite : Sidebar originale */}
        <div ref={sidebarRef} className="reveal-right glass-card" style={styles.contactSidebar}>
          <h3 style={{fontSize: '1.4rem', marginBottom: '32px'}}>Infos du Club</h3>
          {[
            { icon: <MapPin size={24} color="var(--primary)" />, title: 'Adresse', text: 'Cocody, Rue A24, Villa 4, Abidjan' },
            { icon: <Phone size={24} color="var(--primary)" />, title: 'WhatsApp', text: 'Contactez-nous', link: 'https://wa.me/2250719264924' },
            { icon: <Mail size={24} color="var(--primary)" />, title: 'Email', text: 'le.shawarmaclub@gmail.com' },
            { icon: <Clock size={24} color="var(--primary)" />, title: 'Horaires', text: 'Lun - Sam: 11h - 22h\nDim: 12h - 21h' },
          ].map((item, i) => (
            <div key={i} style={styles.contactInfoItem}>
              <div>{item.icon}</div>
              <div>
                <h4 style={{fontSize: '1.05rem', marginBottom: '4px'}}>{item.title}</h4>
                {item.link 
                  ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', fontWeight: '600'}}>{item.text}</a>
                  : <p style={{color: '#666', whiteSpace: 'pre-line'}}>{item.text}</p>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="2" y="4" rx="2"/><path d="M18 10h1.722a2 2 0 0 1 1.769 1.066l1.242 2.483a2 2 0 0 1 .267 1.002V17h-2"/><path d="M6 17h6"/><circle cx="4" cy="17" r="2"/><circle cx="16" cy="17" r="2"/></svg>
);

const styles = {
  headerSection: { padding: '80px 0 60px', backgroundColor: '#fafafa' },
  pageTitle: { fontSize: '3.5rem', marginBottom: '16px' },
  pageSubtitle: { fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 },
  optionsContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '-40px' },
  optionCard: { padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' },
  optionHeader: { marginBottom: '24px' },
  iconBg: { width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  optionBody: { flexGrow: 1 },
  stepList: { listStyle: 'none', margin: 0, padding: 0 },
  stepItem: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '1.05rem', color: '#333' },
  stepNum: { width: '32px', height: '32px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, fontSize: '0.9rem' },
  optionFooter: { marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #eaedf2' },
  partnerList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  partnerItem: { padding: '16px 24px', backgroundColor: '#fafafa', border: '1px solid #eaedf2', borderRadius: '8px', fontWeight: '700', fontSize: '1.05rem', textAlign: 'center' },
  zonesContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
  zonesList: { listStyle: 'none', padding: 0, margin: '0 0 24px 0' },
  zoneItem: { display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #eaedf2', fontSize: '1.05rem', fontWeight: '600' },
  zoneTime: { color: 'var(--primary)', fontWeight: '700' },
  mapPlaceholder: { height: '400px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)' },
  mapLabel: { position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '8px 20px', borderRadius: '999px', fontWeight: '700', fontSize: '0.9rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 10 },
  contactContainer: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '64px' },
  visualWrapper: { display: 'flex', flexDirection: 'column' },
  canvasContainer: { 
    height: '450px', 
    backgroundColor: 'var(--primary-light)', 
    borderRadius: '24px', 
    position: 'relative', 
    overflow: 'hidden',
    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.02)' 
  },
  contactSidebar: { padding: '40px', borderRadius: '16px', alignSelf: 'flex-start' },
  contactInfoItem: { display: 'flex', gap: '16px', marginBottom: '28px' },
};

export default Delivery;
