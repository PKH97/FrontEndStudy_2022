import React from "react";
// import styles from './subcom.module.css';
import styles from './event.module.css';
import Footer from '../footer';

function Event() {
    return(
        <div className={styles.subcom}>
            <header className={styles.header}>
                <h3>event</h3>
            </header>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}>
                <div className={styles.notice}>
                    <div className={styles.box}>
                        <div>
                            이벤트결과
                        </div>
                        <ul>
                            <li>이벤트결과입니다</li>
                            <li>이벤트결과입니다</li>
                            <li>이벤트결과입니다</li>
                            <li>이벤트결과입니다</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Event;