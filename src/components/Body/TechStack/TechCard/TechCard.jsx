import React from 'react';
import styles from "./TechCard.module.scss";

const TechCard = ({ specTech }) => {
    return (
        <div className={styles.specTech_card}>
            <div className={styles.specTech_icon}>{specTech.icon}</div>
        </div>
    )
}

export default TechCard
