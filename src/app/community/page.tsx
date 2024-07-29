import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.container}>
            <header>
                <title>Give Back Project</title>
                <meta name="description" content="Give Back, Pay It Forward" />
                <link rel="icon" href="/favicon.ico" />
            </header>

            <div className="navbar bg-base-300">
                <Link href="/"> <button className="btn btn-outline btn-secondary">Home</button></Link>
            </div>


            <header className={styles.header}>
                <h1>Give Back, Pay It Forward</h1>
            </header>

            <div className="avatar">
                <div className="w-12">
                    <Image
                        src="/flyer.png"
                        alt="back to school drive"
                        width={500}
                        height={600}
                    />
                </div>
            </div>

            <main className={styles.main}>
                <div className={styles.flyer}>
                    <h1>Donate Now!</h1>
                    <p> We are donating to women shelters in Long Island.</p>
                    <p> Grades: k-12 </p>
                    <p> Supplies Needed:

                        Backbags,

                        Crayons,

                        Calculators,

                        Folders,

                        Notebooks,

                        Pens,

                        & Pencils etc.</p>
                </div>
            </main>

            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a href="/about" className="link link-hover">About us</a>
                    <a href="/podcast" className="link link-hover">Podcast</a>
                    <a href="/hair" className="link link-hover">Hair</a>
                </nav>
                <nav>

                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()}</p>
                </aside>
            </footer>
        </div>


    );
}