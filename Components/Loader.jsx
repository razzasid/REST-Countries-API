import styles from "./Loader.module.css";

function Loader() {
  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <div className={[styles.flag, styles.loading].join(" ")}></div>
      </section>
      <section className={styles.right}>
        <div className={[styles.heading, styles.loading].join(" ")}></div>
        <div className={[styles.subHeading, styles.loading].join(" ")}></div>
        <div className={[styles.subHeading, styles.loading].join(" ")}></div>
        <div className={[styles.subHeading, styles.loading].join(" ")}></div>
      </section>
    </main>
  );
}

export default Loader;
