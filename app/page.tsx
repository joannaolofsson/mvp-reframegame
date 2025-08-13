import MvpGame from "./game/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>The reframe game</h1>
          <p>- Questions that expands the world</p>
          <div className={styles.mvpGameWrapper}>
            <MvpGame />
          </div>
        </div>
      </main>
    </div>
  );
}

