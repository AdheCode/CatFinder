import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/CatItem.module.css";

function CatItem({ evt }) {
  return (
    <div className={styles.cat}>
      <div className={styles.img}>
        <Image
          src={evt.image ? (evt.image.url) : "/images/default.jpg"}
          width={170}
          height={100}
          alt="..."
        />
      </div>
      <div className={styles.info}>
          <span>
              From: {evt.origin}
          </span>
          <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
          <Link href={`/cats/${evt.id}`}>
              <a className='btn'>Details</a>
          </Link>
      </div>
    </div>
  );
}

export default CatItem;
