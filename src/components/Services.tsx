import React from 'react';
import styles from './Services.module.scss';

interface Service {
    icon: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: '🔥',
        title: 'Heatup & Dryout Services',
        description: 'Specialized heatup and dryout services for all major refractory consuming industries, ensuring optimal furnace performance and longevity.'
    },
    {
        icon: '🏭',
        title: 'Refractory Heating',
        description: 'Expert refractory heating and drying techniques developed over 50 years of industry experience, minimizing downtime and maximizing efficiency.'
    },
    {
        icon: '⚙️',
        title: 'Burner Operation',
        description: 'Professional burner operation services by technicians who are specialists in high-temperature industrial burner systems and safety protocols.'
    },
    {
        icon: '📊',
        title: 'Furnace Performance Optimization',
        description: 'Comprehensive furnace performance analysis and optimization to extend furnace life and improve operational efficiency.'
    }
];

const Services: React.FC = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our <span className={styles.gradient}>Services</span></h2>
                    <p className={styles.subtitle}>
                        Comprehensive solutions for your industrial heating needs
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{service.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
