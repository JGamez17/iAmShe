import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';


const HairLink = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <Image
                    src="/iAmSheHair.png"
                    alt="Picture of the author"
                    width={700} // Adjust the width as needed
                    height={900} // Adjust the height as needed
                    className={styles.logo}
                />
            </header>
            <div className={styles.content}>
                <a className={styles.linkContainer} href="https://iamsheartistry.as.me/schedule.php" target="_blank">
                    Click here to book now!
                </a>
            </div>
        </div>
    );
}

export default HairLink;
