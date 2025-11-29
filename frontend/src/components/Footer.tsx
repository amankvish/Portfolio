'use client';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  const socialLinks = [
    { href: "https://github.com/amankvish", icon: "fab fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/amankvish/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "mailto:amankvish2@outlook.com", icon: "fas fa-envelope", label: "Email" }
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          
          {/* Main Footer Content - Horizontal Layout */}
          <div className={styles.footerMain}>
            
            {/* Brand & Description */}
            <div className={styles.brandSection}>
              <div className={styles.logoGroup}>
                <div className={styles.logo}>
                  <span className={styles.logoText}>AV</span>
                  <div className={styles.logoGlow}></div>
                </div>
                <div className={styles.brandInfo}>
                  <h3 className={styles.brandName}>Aman Vishwakarma</h3>
                  <p className={styles.brandTagline}>
                    Full Stack Developer & Tech Enthusiast
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links - Horizontal */}
            <div className={styles.navSection}>
              <nav className={styles.footerNav}>
                {footerLinks.map((link) => (
                  <a key={link.name} href={link.href} className={styles.navLink}>
                    <span className={styles.linkIcon}>{link.icon}</span>
                    <span className={styles.linkText}>{link.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & CTA */}
            <div className={styles.actionSection}>
              <div className={styles.socialGroup}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <a href="mailto:amankvish2@outlook.com" className={styles.ctaButton}>
                Let's Connect
                <span className={styles.ctaArrow}>→</span>
              </a>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <div className={styles.divider}></div>
            <div className={styles.bottomContent}>
              <p className={styles.copyright}>
                &copy; {currentYear} Aman Vishwakarma. All rights reserved.
              </p>
              <div className={styles.techInfo}>
                <span>Built with</span>
                <span className={styles.techHighlight}>Next.js</span>
                <span className={styles.heart}>💙</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`${styles.backToTop} ${showBackToTop ? styles.active : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
}