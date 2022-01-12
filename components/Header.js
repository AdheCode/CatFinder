import Link from "next/link";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Cat Finder</a>
        </Link>
      </div> 

      <nav>
        <ul>
          <li>
            <Link href="/cats/search">
              <a>Search</a>
            </Link>
          </li>
          <li>
            <Link href="/cats">
              <a>Cats</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
