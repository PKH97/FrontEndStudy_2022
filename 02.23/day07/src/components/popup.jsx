import React from "react";
import styles from './subcom.module.css';
import Footer from '../footer';

function Popup() {
    return(
        <div className={styles.subcom}>
            <header className={styles.header}>
                <h3>popup</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}></div>
            <Footer />
        </div>
    );
}

export default Popup;