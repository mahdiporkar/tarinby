import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiFetch, getToken } from "../../lib/api";
import styles from "../../styles/Detail.module.css";

export default function OpportunityDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [match, setMatch] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const token = getToken();
      if (!token) {
        setError("ابتدا وارد شوید.");
        return;
      }

      try {
        const response = await apiFetch("/buyer/matches", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        const found = data.find((item: any) => item.id === id);
        setMatch(found);
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (id) {
      load();
    }
  }, [id]);

  const handleAccept = async () => {
    const token = getToken();
    if (!token || !match) {
      return;
    }
    await apiFetch(`/matches/${match.id}/accept`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });
    router.reload();
  };

  const handleReject = async () => {
    const token = getToken();
    if (!token || !match) {
      return;
    }
    await apiFetch(`/matches/${match.id}/reject`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });
    router.push("/opportunities");
  };

  if (error) {
    return <main className={styles.wrapper}>{error}</main>;
  }

  if (!match) {
    return <main className={styles.wrapper}>در حال بارگذاری...</main>;
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <h1>جزئیات فرصت</h1>
        <p>امتیاز تطابق: {match.matchScore}</p>
        <p>
          موقعیت: {match.listing.city} - {match.listing.district}
        </p>
        <p>قیمت: {match.listing.price.toLocaleString()}</p>
        <p>وضعیت: {match.status}</p>
        {match.contactPhone ? (
          <p className={styles.contact}>شماره تماس: {match.contactPhone}</p>
        ) : (
          <p className={styles.note}>شماره تماس پس از پذیرش نمایش داده می‌شود.</p>
        )}
        <div className={styles.actions}>
          <button onClick={handleAccept}>پذیرش</button>
          <button onClick={handleReject} className={styles.secondary}>
            رد کردن
          </button>
        </div>
      </section>
    </main>
  );
}
