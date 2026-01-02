import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch, getToken } from "../../lib/api";
import styles from "../../styles/List.module.css";

interface Match {
  id: string;
  status: string;
  matchScore: number;
  listing: { city: string; district: string; price: number };
  contactPhone?: string | null;
}

export default function Opportunities() {
  const [matches, setMatches] = useState<Match[]>([]);
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
        setMatches(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    load();
  }, []);

  return (
    <main className={styles.wrapper}>
      <h1>فرصت‌های من</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.list}>
        {matches.map((match) => (
          <Link key={match.id} href={`/opportunities/${match.id}`} className={styles.card}>
            <h3>امتیاز {match.matchScore}</h3>
            <p>
              {match.listing.city} - {match.listing.district}
            </p>
            <p>قیمت: {match.listing.price.toLocaleString()}</p>
            <span className={styles.badge}>{match.status}</span>
          </Link>
        ))}
        {!matches.length && !error && <p>هنوز فرصتی ثبت نشده است.</p>}
      </div>
    </main>
  );
}
