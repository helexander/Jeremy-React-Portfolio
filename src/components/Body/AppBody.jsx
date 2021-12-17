import React from 'react';
import styles from "./AppBody.module.scss";
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import TechStack from './TechStack/TechStack';

const AppBody = () => {
    return (
        <div className={styles.appBody}>
            <section id="hero" className={styles.appSection}>
                <Hero />
            </section>
            <section id="tech" className={styles.appSection}>
                <TechStack />
            </section>
            <section id="projects" className={styles.appSection}>
                <Projects />
            </section>
            <section id="contact" className={styles.appSection}>
                <Contact />
            </section>
        </div>
    )
}

export default AppBody
