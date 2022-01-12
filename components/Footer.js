import Link from 'next/link';
import styles from '@/styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Cat Finder 2022</p>
            <p>
                <Link href='/about'>About This Project</Link>
            </p>
        </footer>
    )
}

export default Footer
