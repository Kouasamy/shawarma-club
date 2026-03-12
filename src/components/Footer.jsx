import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

/* TikTok SVG icon (not in lucide-react) */
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.78a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/>
  </svg>
);

const Footer = () => {
  const ref = useReveal();
  return (
    <footer style={styles.footer}>
      <div className="container reveal responsive-grid" ref={ref} style={styles.container}>
        
        <div style={styles.brandCol}>
          <h2 style={styles.logoText}>Le Shawarma Club</h2>
          <p style={styles.description}>
            Le spécialiste du shawarma authentique à Abidjan. Savourez l'art du Shawarma à prix doux, livré directement à votre porte. 🌯✨
          </p>
          <div style={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=61562369618426" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Facebook size={20} /></a>
            <a href="https://www.instagram.com/le.shawarmaclub" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@leshawarmaclub?_r=1&_t=ZS-94aISafzQ1w" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><TikTokIcon size={20} /></a>
          </div>
        </div>

        <div style={styles.linkCol}>
          <h3 style={styles.colTitle}>Menu</h3>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Accueil</Link></li>
            <li><Link to="/menu" style={styles.link}>Notre Menu</Link></li>
            <li><Link to="/histoire" style={styles.link}>Notre Histoire</Link></li>
            <li><Link to="/livraison" style={styles.link}>Livraison & Contact</Link></li>
          </ul>
        </div>

        <div style={styles.contactCol}>
          <h3 style={styles.colTitle}>Contact</h3>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>
               <Phone size={18} color="var(--primary)"/> 
               <a href="https://wa.me/2250719264924" style={{color: '#666666'}}>WhatsApp</a>
            </li>
            <li style={styles.contactItem}>
               <Mail size={18} color="var(--primary)"/> 
               <a href="mailto:le.shawarmaclub@gmail.com" style={{color: '#666666'}}>le.shawarmaclub@gmail.com</a>
            </li>
            <li style={styles.contactItem}>
               <MapPin size={18} color="var(--primary)"/> 
               <span>Cocody, Rue A24, Villa 4, Abidjan</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomContainer}>
          <p>© 2026 Le Shawarma Club. Tous droits réservés.</p>
          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>Mentions légales</a>
            <a href="#" style={styles.legalLink}>Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: '#fafafa', borderTop: '1px solid #eaedf2', paddingTop: '64px', marginTop: '0' },
  container: { display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr', gap: '32px', paddingBottom: '48px' },
  logoText: { fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px', letterSpacing: '-0.02em' },
  description: { color: '#666666', marginBottom: '24px', maxWidth: '320px', lineHeight: 1.7 },
  socials: { display: 'flex', gap: '12px' },
  socialIcon: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '44px', height: '44px', borderRadius: '50%',
    backgroundColor: 'var(--primary-light)', color: 'var(--primary)',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  colTitle: { fontSize: '1.15rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text-dark)' },
  linkList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  link: { color: '#666666', fontWeight: '500' },
  contactList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  contactItem: { display: 'flex', alignItems: 'center', gap: '12px', color: '#666666', fontWeight: '500' },
  bottomBar: { borderTop: '1px solid #eaedf2', padding: '24px 0' },
  bottomContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '0.875rem' },
  legalLinks: { display: 'flex', gap: '24px' },
  legalLink: { color: '#999' }
};

export default Footer;
