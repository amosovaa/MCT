import React from 'react';
import styles from './Banner.module.scss'

function Banner(props) {
    return (
        <div>
            <section id="banner" className={styles.major}>
                    <div className="inner">
                        <header className={styles.major}>
                            <h1>Hi, my name is Kirusha</h1>
                        </header>
                        <div className={styles.context}>
                            <p>A responsive site template designed by HTML5 UP<br />
                            and released under the Creative Commons.</p>
                            <ul className={styles.actions}>
                                <li><a href="#one" className="button next scrolly">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Banner;