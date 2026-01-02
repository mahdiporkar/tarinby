import Link from "next/link";
import styles from "../styles/Landing.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <p className={styles.tag}>Tarinby</p>
        <h1>خرید بر اساس نیاز، نه بر اساس لیست‌ها</h1>
        <p className={styles.subtitle}>
          نیازت رو ثبت کن؛ هوشمندانه بهترین فرصت‌ها رو دریافت کن.
        </p>
        <div className={styles.actions}>
          <Link href="/need" className={styles.primary}>
            ثبت نیاز جدید
          </Link>
          <Link href="/opportunities" className={styles.secondary}>
            فرصت‌های من
          </Link>
        </div>
        <div className={styles.footer}>
          <Link href="/login">ورود / ثبت‌نام</Link>
        </div>
      </section>
    </main>
  );
}
