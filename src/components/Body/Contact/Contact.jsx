import React from 'react';
import Separator from '../../../common/Separator';
import Socials from '../../../common/Socials';
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <Separator />
            <div className={styles.contact_container}>
                <label className={styles.contact_title}>Contact</label>
                <div className={styles.contact_container}>
                    <div className={styles.contact_left}>
                        <p>Do you wish to connect or collaborate? Contact me on any of the following platforms. </p>
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
        </div>
    )
}

export default Contact
