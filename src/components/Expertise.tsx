import React from 'react';
import styles from './Expertise.module.scss';

interface ExpertiseStat {
    number: string;
    label: string;
    description: string;
}

const expertiseStats: ExpertiseStat[] = [
    {
        number: '50+',
        label: 'Years of Experience',
        description: 'Over half a century of industry-leading expertise in heatup and dryout services'
    },
    {
        number: '30+',
        label: 'Projects per Technician',
        description: 'Each technician performs approximately 30 specialized projects annually'
    },
    {
        number: '30+',
        label: 'Years of Tenure',
        description: 'Numerous technicians and managers with 30+ years of hands-on experience'
    }
];

const Expertise: React.FC = () => {
    return (
        <section className={styles.expertise} id="expertise">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our <span className={styles.gradient}>Expertise</span></h2>
                    <p className={styles.subtitle}>
                        Decades of innovation and excellence in refractory services
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <p className={styles.text}>
                            Hotwork management has developed deep expertise in our clients' processes and has worked
                            jointly with clients to minimize downtime, improve service quality, and extend furnace performance.
                        </p>
                        <p className={styles.text}>
                            Our technicians are specialists in burner operation, refractory heating, and drying.
                            We continue to innovate with improvements to our procedures and equipment, ensuring
                            we remain at the forefront of the industry.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        {expertiseStats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                                <div className={styles.statDescription}>{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
