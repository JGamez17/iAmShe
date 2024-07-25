import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'; // Assuming you have a separate CSS module for styles

export default function Home() {
  return (
    <div className={`black-background ${styles.container} ${styles.enterButton}`}>
      <div className={styles.imageContainer}>
        <Image
          src="/IAMSHE FILES-01.png" // Path to your image inside the public folder
          alt="My Image"
          width={500}
          height={300}
        />
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}> "She is a storm with skin" </p>
        </div>
      </div>
      <div className={`${styles.linkContainer} form-container flex flex-col gap-8 justify-center items-center`}>
        <Link href="/about"> <button className="btn btn-outline btn-secondary">ENTER</button>
        </Link>
      </div>
    </div>
  );
}
