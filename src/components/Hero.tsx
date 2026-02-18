import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="about">
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>🔥</span>
                    <span>50+ Years of Excellence</span>
                </div>

                <h1 className={styles.title}>
                    Expert <span className={styles.gradient}>Heatup & Dryout</span> Services
                </h1>

                <p className={styles.subtitle}>
                    For over 50 years, Hotwork has been providing industry-leading heatup and dryout services
                    to all major refractory consuming industries. Our expert technicians specialize in burner
                    operation, refractory heating, and furnace performance optimization.
                </p>

                <div className={styles.cta}>
                    <button
                        className={styles.ctaPrimary}
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Our Services
                    </button>
                    <button
                        className={styles.ctaSecondary}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get in Touch
                    </button>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>50+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>30+</div>
                        <div className={styles.statLabel}>Projects/Year per Tech</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
