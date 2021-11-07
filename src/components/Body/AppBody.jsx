import React from 'react';
import styles from "./AppBody.module.scss";
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import TechStack from './TechStack/TechStack';

const AppBody = () => {
    return (
        <div className={styles.appBody}>
            <section id="hero">
                <Hero />
            </section>
            <section id="tech">
                <TechStack />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default AppBody
