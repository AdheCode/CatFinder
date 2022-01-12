import Head from 'next/head';
import styles from '@/styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';
import { useRouter } from 'next/router';

function Layout({title, keywords, description, children}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header/>
            {router?.pathname === '/' && <Showcase/>}  
            <div className={styles.container}>        
            {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Cat Finder | Find the your favorite cats',
    description: 'Find the your favorite cats',
    keywords:'animal, pet, cat'
}

export default Layout
