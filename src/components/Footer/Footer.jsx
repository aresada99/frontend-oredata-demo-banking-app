import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} Ares Ada Dora. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
