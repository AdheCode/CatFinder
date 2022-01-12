import Layout from "@/components/Layout";
import { API_URL_HOST } from "@/config/index";
import CatItem from "@/components/CatItem";
import Link from 'next/link';

export default function Home({cats}) {
  return (
    <Layout>
      <h1>Trending Cats</h1>
      {cats.length === 0 && <h3>No Cats to show</h3>}

      {cats.map((evt) => (
        <CatItem key={evt.id} evt={evt} />
      ))}

      {cats.length > 0 && (
        <Link href='/cats'>
          <a className="btn-secondary">View All Cats</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL_HOST}/breeds?limit=3`);
  const cats = await res.json();

  return {
    props: {
      cats
    }
  }
}
