import React from 'react';
import Separator from '../../../common/Separator';
import Socials from '../../../common/Socials';
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Separator />
            <label className={styles.contact_title}>Contact</label>
            <div className={styles.contact_container}>
                <div className={styles.contact_left}>
                    <p>Want to connect? Contact me on any of these social platforms</p>
                    <Socials />
                </div>
                <div className={styles.download}>
                    <a download alt="Jeremys Resume" href={require("../../../assets/resume_jeremy.pdf").default}>
                        <i className={`fi fi-rr-download ${styles.download_icon}`}></i>
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
