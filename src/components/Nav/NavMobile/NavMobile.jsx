import React from 'react';
import styles from "./NavMobile.module.scss";

const NavMobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className={styles.mobile}>
            <div className={styles.closeIcon} onClick={() => setIsOpen(!isOpen)}>
                <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className={styles.mobile_options}>
                <div className={styles.mobile_option}>
                    <a href="#hero">
                        <i className={`fi fi-rr-user ${styles.option_icon}`}></i>About
                    </a>
                </div><div className={styles.mobile_option}>
                    <a href="#tech">
                        <i className={`fi fi-rr-keyboard ${styles.option_icon}`}></i>Tech Stack
                    </a>
                </div>
                <div className={styles.mobile_option}>
                    <a href="#projects">
                        <i className={`fi fi-rr-brush ${styles.option_icon}`}></i>Projects
                    </a>
                </div>

                <div className={styles.mobile_option}>
                    <a href="#contact">
                        <i className={`fi fi-rr-envelope ${styles.option_icon}`}></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavMobile
