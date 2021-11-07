import React from 'react';
import styles from "./NavWeb.module.scss";

const NavWeb = () => {
    return (
        <div className={styles.web}>
            <div className={styles.web_option}>
                <a href="#hero">
                    <i className={`fi fi-rr-user ${styles.option_icon}`}></i>About
                </a>
            </div><div className={styles.web_option}>
                <a href="#tech">
                    <i className={`fi fi-rr-keyboard ${styles.option_icon}`}></i>Tech Stack
                </a>
            </div>
            <div className={styles.web_option}>
                <a href="#projects">
                    <i className={`fi fi-rr-brush ${styles.option_icon}`}></i>Projects
                </a>
            </div>

            <div className={styles.web_option}>
                <a href="#contact">
                    <i className={`fi fi-rr-envelope ${styles.option_icon}`}></i>Contact
                </a>
            </div>
        </div>
    )
}

export default NavWeb
