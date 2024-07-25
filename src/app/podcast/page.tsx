'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import AskShe to avoid hydration error
const AskShe = dynamic(() => import('../askshe/page'), { ssr: false });

const ExternalLinkExample = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // or a loading spinner
    }

    return (
        <div className={styles.pageContainer}>
            <Image
                src="/DIME TALK-03.png"
                alt="Picture of the author"
                width={500}
                height={400}
            />
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <video width="340" height="150" controls>
                        <source src="/videos/Replay_Final171712.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h6 className="footer-title margin-bottom-20">Youtube Channel</h6>
                    <div className={styles.customLink}>
                        <a href="https://www.youtube.com/@DimeTalkWithDess" target="_blank" className={styles.customLink}>
                            <svg width="200" height="24" viewBox="0 0 24 24" className="fill-current margin-bottom-50">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a className={styles.linkContainer} href="https://podcasters.spotify.com/pod/show/i-am-she" target="_blank">
                            Click here to listen now!
                        </a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <AskShe />
                </div>
            </div>
        </div>
    );
};

export default ExternalLinkExample;
