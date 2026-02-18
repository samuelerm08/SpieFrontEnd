import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoText}>SPIE</span>
                            <span className={styles.logoSubtext}>Hotwork</span>
                        </div>
                        <p className={styles.tagline}>
                            Over 50 years of excellence in heatup and dryout services for refractory consuming industries.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>Quick Links</h4>
                        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className={styles.link}>
                            About Us
                        </button>
                        <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className={styles.link}>
                            Services
                        </button>
                        <button onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })} className={styles.link}>
                            Expertise
                        </button>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.contactTitle}>Get in Touch</h4>
                        <p className={styles.contactText}>
                            Ready to optimize your furnace performance? Contact us today to learn how our expert team can help.
                        </p>
                        <button className={styles.contactButton}>
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} SPIE Hotwork. All rights reserved.
                    </p>
                    <div className={styles.social}>
                        <span className={styles.socialText}>Follow us:</span>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">LinkedIn</a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
