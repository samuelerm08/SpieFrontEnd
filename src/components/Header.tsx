import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>SPIE</span>
                    <span className={styles.logoSubtext}>Hotwork</span>
                </div>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    <button onClick={() => scrollToSection('about')} className={styles.navLink}>
                        About
                    </button>
                    <button onClick={() => scrollToSection('services')} className={styles.navLink}>
                        Services
                    </button>
                    <button onClick={() => scrollToSection('expertise')} className={styles.navLink}>
                        Expertise
                    </button>
                    <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
                        Contact
                    </button>
                </nav>

                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
