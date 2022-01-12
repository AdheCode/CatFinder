import Layout from "@/components/Layout";
import { API_URL_HOST, PER_PAGE } from "@/config/index";
import CatItem from "@/components/CatItem";
import Pagination from "@/components/Pagination";

export default function CatsPage({cats, page, total}) {
  return (
    <Layout>
      <h1>Cats</h1>
      {cats.length === 0 && <h3>No Cats to show</h3>}

      {cats.map((evt) => (
        <CatItem key={evt.id} evt={evt} />
      ))}

        <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({query:{page = 1}}) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  const catTotal = await fetch(`${API_URL_HOST}/breeds`);
  const result = await catTotal.json();
  const total = result.length;

  const catRes = await fetch(`${API_URL_HOST}/breeds?limit=${PER_PAGE}&page=${start}`);
  const cats = await catRes.json();

  return {
    props: {
      cats, page: +page, total
    }
  }
}
