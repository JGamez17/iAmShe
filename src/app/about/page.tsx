import styles from './styles.module.css';
import Image from 'next/image';

const About = () => {
    return (
        <div className={styles.pageContainer}>
            <header><h2>&apos;SHē&apos; - referred to a Woman.</h2></header>
            <div className="avatar">
                <div className="w-22 rounded-full">
                    <Image
                        src="/profilepic3.png"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className={styles['about-content']}>
                <a>
                    Introducing I.AM.SHE, a proud Black Woman from Long Island, New York, with a passion for business and community. She&apos;s more than a brand; she&apos;s a force of individuality and success, embodying the quote, &ldquo;She&apos;s a storm with skin.&rdquo; Born from a lifelong desire for entrepreneurship and creativity, I.AM.SHE showcases Destiny&apos;s strengths, weaknesses, and uniqueness through various creative outlets. As CEO of multiple ventures, including Hair and Media, Destiny (also known as Dime) is a visionary leader and a staunch advocate for civil rights and diversity. Her journey exemplifies resilience and determination, proving that with belief in oneself, anything is achievable. Join her as she continues to inspire and make an impact that extends far beyond the ordinary.
                </a>
            </div>

        </div>
    );
}

export default About;