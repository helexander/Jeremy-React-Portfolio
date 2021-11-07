import React from 'react';
import Socials from '../../../common/Socials';
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_top}>
                <div className={styles.hero_info}>
                    <p>Meet Jeremy 👋🏼</p>
                    <span>
                        <a href="#projects" className={styles.hero_specialInfo}>full-stack developer</a>
                    </span>
                    <br /> Passionate and solution-oriented developer with decent
                    experience with software development.
                </div>
                <div className={styles.hero_picture}>
                    <img src={require('../../../assets/images/profilepic.png').default} alt="Profile of Jeremy" className={styles.hero_profilePic} />
                </div>
            </div>
            <Socials />
        </div>
    )
}

export default Hero
