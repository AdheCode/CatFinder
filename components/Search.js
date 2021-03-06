import styles from '@/styles/Search.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Search() {
    const [term, setTerm] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/cats/search?term=${term}`);
        setTerm('');
    }
    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search your cat" />
            </form>
        </div>
    )
}

export default Search
