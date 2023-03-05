import styles from "@/styles/Sidebar.module.css";

export default function SearchBox() {
  return (
    <div className={styles.searchBoxWrapper}>
      <form action="/" className={styles.allSearch}>
        <input
          type="text"
          className={styles.searchBox}
          placeholder="Search links"
        ></input>
      </form>
    </div>
  );
}
