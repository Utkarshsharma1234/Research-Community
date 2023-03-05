import styles from '../Sidebar.module.css'

export default function RoundButton({ text, link }) {
  return (
    <p className={styles.roundButtonText}>
      <img src="/images/explore.svg" /> <p href="{link}" className={styles.roundButtonText}>{text}</p>
    </p>
  );
}
