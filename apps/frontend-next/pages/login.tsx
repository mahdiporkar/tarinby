import { useState } from "react";
import { useRouter } from "next/router";
import { apiFetch } from "../lib/api";
import styles from "../styles/Form.module.css";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("BUYER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ phone, role })
      });
      const data = await response.json();
      localStorage.setItem("tarinby_token", data.accessToken);
      router.push("/opportunities");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <h1>ورود سریع</h1>
        <label>
          شماره موبایل
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0912..." />
        </label>
        <label>
          نقش
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="BUYER">خریدار</option>
            <option value="SELLER">فروشنده</option>
          </select>
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "در حال ورود..." : "ورود"}
        </button>
      </form>
    </main>
  );
}
