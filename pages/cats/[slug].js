import Layout from "@/components/Layout";
import { API_URL_HOST } from "@/config/index";
import styles from "@/styles/Cat.module.css";
import Link from "next/link";
import Image from "next/image";

function CatPage({ evt }) {
  return (
    <Layout>
      <div className={styles.cat}>
        <span>
          Form: {evt?.breeds[0].origin}
        </span>
        <h1>{evt.breeds[0].name}</h1>
        {evt.url && (
          <div className={styles.image}>
            <Image
              src={evt.url}
              width={960}
              height={600}
              alt="..."
            />
          </div>
        )}

        <h3>Temperament:</h3>
        <p>{evt.breeds[0].temperament}</p>
        <h3>Description:</h3>
        <p>{evt.breeds[0].description}</p>
        <h3>Other Names:</h3>
        <p>{evt.breeds[0].alt_names}</p>

        <Link href="/cats/search">
          <a className={styles.back}>{`<`} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export default CatPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL_HOST}/images/search?breed_ids=${slug}`);
  const cats = await res.json();

  return {
    props: {
      evt: cats[0],
    }
  };
}
