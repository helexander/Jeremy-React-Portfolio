import React from 'react';
import styles from "./TechCard.module.scss";

const TechCard = ({ specTech }) => {
    return (
        <div className={styles.specTech_card}>
            <div className={styles.specTech_icon}>{specTech.icon}</div>
            <label className={styles.specTech_name}>{specTech.name}</label>
        </div>
    )
}

export default TechCard
