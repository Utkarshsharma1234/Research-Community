import styles from "@/styles/components/RightBar/RightSearchBox.module.css";

export default function RightSearchBox() {
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
