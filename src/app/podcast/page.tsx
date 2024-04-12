import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';


const ExternalLinkExample = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <Image
                    src="/DIME TALK-03.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className={styles.logo}
                />
            </header>
            <a className={styles.linkContainer} href="https://podcasters.spotify.com/pod/show/i-am-she" target="_blank">
                Click here to listen now !
            </a>
            <h6 className="footer-title">Youtube Chanel</h6>
            <div className="grid grid-flow-col gap-4">
                <a href="https://www.youtube.com/@DimeTalkWithDess" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};


export default ExternalLinkExample;