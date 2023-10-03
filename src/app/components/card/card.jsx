import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container} >
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>03.10.2023</span>
            <span className={styles.category}>category</span>
          </div>
          <Link href="/">
            <h1>This title is also informative and intriguing.</h1>
          </Link>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          <Link href="/" className={styles.link}>
            Read More
          </Link>
        </div>
    </div>
  );
};

export default Card;