import React from "react";
import styles from './subcom.module.css';
import Footer from '../footer';

function Market() {
    return(
        <div className={styles.subcom}>
            <header className={styles.header}>
                <h3>market</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}></div>
            <Footer />
        </div>
    );
}

export default Market;