import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.main_container}>
      <div className={styles.button_container}>
        <button type="button" className={styles.button}>
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
