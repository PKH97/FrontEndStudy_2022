import React from "react";
import styles from './subcom.module.css';
import Footer from '../footer';

function Brand() {
    return(
        <div className="subcom">
            <header className={styles.header}>
                <h3>brand</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}></div>
            <Footer />
        </div>
    );
}

export default Brand;