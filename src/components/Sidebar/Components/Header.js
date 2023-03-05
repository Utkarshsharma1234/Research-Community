import { Inter } from "@next/font/google";
import styles from "@/styles/Sidebar.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logoBox + " d-flex align-items-center"}>
            <img src="images/logo.svg" alt="logo" className={styles.logo}></img>
            <p className={styles.headerText}>Research Community</p>
        </div>
        <div className={styles.hamburgerBox}>
            <img src="images/option.svg" alt="hamburger" className={styles.hamburger}></img>
        </div>
    </div>
  );
}