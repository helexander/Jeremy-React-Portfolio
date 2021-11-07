import React from 'react';
import Separator from '../../../common/Separator';
import { TechStackData } from '../../../data/techStackData';
import TechCard from './TechCard/TechCard';
import styles from "./TechStack.module.scss";

const TechStack = () => {
    const data = TechStackData;
    return (
        <div className={styles.tech}>
            <Separator />
            <label className={styles.tech_title}>Tech Stack</label>
            <div className={styles.tech_container}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.tech_section}>
                            <label className={styles.tech_section_title}>{item.type}</label>
                            <div className={styles.tech_list}>
                                {item.list.map((specTech, index) => {
                                    return <TechCard key={index} specTech={specTech} />
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default TechStack
