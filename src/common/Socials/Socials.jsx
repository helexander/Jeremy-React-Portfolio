import React from 'react'
import { SocialData } from '../../data/socialData';
import styles from "./Socials.module.scss";

const Socials = () => {
    const data = SocialData;
    return (
        <div className={styles.social_contacts}>
            {data.map((item, index) => {
                return (
                    <a key={item.id} href={item.link}>
                        <div className={styles.social_div_icon}>
                            <img src={item.icon} alt={item.platform} className={styles.social_icon} />
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default Socials
