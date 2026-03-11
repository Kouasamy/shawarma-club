import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Menu' },
    { path: '/histoire', label: 'Notre histoire' },
    { path: '/livraison', label: 'Livraison' },
  ];

  return (
    <header className={scrolled ? 'navbar-scrolled' : ''} style={{
      ...styles.header,
      ...(scrolled ? { boxShadow: '0 1px 3px rgba(0,0,0,0.08)' } : {}),
    }}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoContainer}>
          <img src="/images/logo-club.png" alt="Le Shawarma Club Logo" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }} />
          <span style={{...styles.logoText, fontFamily: "'Six Hands Black', cursive"}}>Le Shawarma Club</span>
        </Link>
        
        <nav className="desktop-nav" style={styles.nav}>
          <ul style={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  style={{
                    ...styles.navLink,
                    color: location.pathname === link.path ? 'var(--primary)' : '#333',
                    fontWeight: location.pathname === link.path ? '700' : '600',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="https://wa.me/message/UFUEWJAI4FTED1" target="_blank" rel="noopener noreferrer" className="btn btn-primary glow-btn desktop-cta" style={styles.ctaBtn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" style={{width: 20, height: 20}} />
          Commander
        </a>

        <button 
          className="mobile-menu-btn" 
          style={styles.mobileMenuBtn} 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`burger-icon ${mobileOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay" style={{...styles.mobileMenu, borderTop: 'none'}}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`mobile-link-large ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/message/UFUEWJAI4FTED1" 
            className="btn btn-primary glow-btn" 
            style={{marginTop: 32, width: '100%', padding: '20px', fontSize: '1.2rem'}}
          >
            Commander mon Shawarma
          </a>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid transparent',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '12px 0',
    transition: 'all 0.3s ease',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
  },
  logoIcon: {
    backgroundColor: 'var(--primary-light)',
    padding: '10px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#121212',
    letterSpacing: '-0.02em',
  },
  nav: { display: 'flex' },
  navList: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '4px 0',
  },
  ctaBtn: {
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '0.9rem',
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
  },
  mobileMenu: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    borderTop: '1px solid #eaedf2',
  },
  mobileLink: {
    fontSize: '1.1rem',
    fontWeight: '600',
    padding: '12px 0',
    borderBottom: '1px solid #eaedf2',
    color: '#333',
    textDecoration: 'none',
  }
};

export default Navbar;
