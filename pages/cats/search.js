import Layout from "../../components/Layout";
import { API_URL_HOST } from "../../config/index";
import CatItem from "../../components/CatItem";
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from "react";
import styles from '../../styles/Search.module.css';

export default function SearchPage({api_url_host}) {
  const [text, setText] = useState('');
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSort, setIsSort] = useState(true);
  const debounced = useDebouncedCallback(
    (value) => {
      setText(value);
    },
    1000
  );

  const handleChangeText = (e) => {
    if (e.length > 2) {
      debounced(e);
    }
  }

  useEffect(() => {
    const getResults =  async () => {
      if (!text) {
        setCats([])
      } else {
        setLoading(true)
        const req = await fetch(`${api_url_host}/breeds/search?q=${text}`);
        const data = await req.json();
        let urllist = [];

        for(let i = 0;i < data.length;i++){
            const response = await fetch(`${api_url_host}/images/search?breed_ids=${data[i].id}`)
            const json = await response.json()
            urllist.push(json[0].url)
        }

        const result = data.map((e, i) => {
          return {...e, image:{url: urllist[i]}};
        })

        if (result) {
          setLoading(false)
        }
        setCats(result)
      }
    } 
    getResults()
  }, [text])



  const handleSelectOption = (e) => {
    let sorted = cats;
    if (e.target.value === 'name') {
      sorted = cats.sort(function (x, y) {
        let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
    }
    if (e.target.value === 'life_span') {
      sorted = cats.sort(function (x, y) {
        const one = x.life_span.split(" - ");
        const two = y.life_span.split(" - ");
        return parseInt(one[0]) - parseInt(two[0]);
      });
    }
    if (e.target.value === 'weight') {
      sorted = cats.sort(function (x, y) {
        const one = x.weight.metric.split(" - ");
        const two = y.weight.metric.split(" - ");
        return parseInt(one[0]) - parseInt(two[0]);
      });
    }
    setCats(sorted);
    setIsSort(!isSort);
  }

  useEffect(() => {}, [isSort])

  return (
    <Layout title="Search Results">
      <div className={styles.search}>
        <form>
            <input type="text" onChange={(e) => handleChangeText(e.target.value)} placeholder="Search your cats" />
        </form>
      </div>

      {cats.length === 0 ?
        (<h3 style={{textAlign: 'center'}}>No Cats to show</h3>):
        (
          <div className={styles.sort}>
            <p>Sort By:</p>
            <select name="sort" onChange={handleSelectOption}>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
              <option value="life_span">Lifespan</option>
            </select>
          </div>
        )}

      {cats.map((evt) => (
        <CatItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {

  return {
    props: {
      api_url_host: `${API_URL_HOST}`
    }
  }
}
