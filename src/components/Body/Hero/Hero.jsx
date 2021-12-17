import React, { useEffect, useRef } from 'react';
import { init } from "ityped";
import Socials from '../../../common/Socials';
import styles from "./Hero.module.scss";

const Hero = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            startDelay: 100,
            backDelay: 2000,
            backSpeed: 60,
            strings: ["Passionate", "Solution-oriented", "Test-driven"],
        })
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.hero_top}>
                <div className={styles.hero_info}>
                    <p>Meet Jeremy 👋🏼</p>

                    <span className={styles.hero_info_about} ref={textRef}></span> <br />
                    <span>
                        <a href="#projects" className={styles.hero_specialInfo}>full-stack developer</a>
                    </span><br />
                    with decent
                    experience in software development.
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
