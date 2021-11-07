import React, { useState } from 'react';
import styles from "./Nav.module.scss";
import NavWeb from './NavWeb';
import NavMobile from './NavMobile';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.nameBrand}><p><strong>JEREMY</strong> CHEE</p></div>
            <div className={styles.menu}>
                <div className={styles.menu_web}>
                    <NavWeb />
                </div>
                <div className={styles.menu_mobile}>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fi-rr-apps ${styles.menu_icon}`}></i>
                    </div>
                    {isOpen && <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Navigation
