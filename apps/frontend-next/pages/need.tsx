import { useState } from "react";
import { useRouter } from "next/router";
import { apiFetch, getToken } from "../lib/api";
import styles from "../styles/Form.module.css";

const steps = ["دسته و موقعیت", "بودجه", "جزئیات"];

export default function Need() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    category: "PROPERTY",
    city: "Tehran",
    district: "1",
    budgetMin: "",
    budgetMax: "",
    beds: "",
    size: ""
  });
  const [error, setError] = useState<string | null>(null);

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const token = getToken();
    if (!token) {
      setError("ابتدا وارد شوید.");
      return;
    }

    try {
      const payload = {
        category: form.category,
        city: form.city,
        district: form.district,
        budgetMin: Number(form.budgetMin),
        budgetMax: Number(form.budgetMax),
        attributes: {
          beds: form.beds ? Number(form.beds) : undefined,
          size: form.size ? Number(form.size) : undefined
        }
      };

      await apiFetch("/needs", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      router.push("/opportunities");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <h1>ثبت نیاز</h1>
        <p className={styles.stepper}>{steps[step]}</p>

        {step === 0 && (
          <div className={styles.grid}>
            <label>
              دسته‌بندی
              <select value={form.category} onChange={(e) => update("category", e.target.value)}>
                <option value="PROPERTY">ملک</option>
                <option value="CAR">خودرو</option>
                <option value="DIGITAL">دیجیتال</option>
              </select>
            </label>
            <label>
              شهر
              <input value={form.city} onChange={(e) => update("city", e.target.value)} />
            </label>
            <label>
              منطقه
              <input value={form.district} onChange={(e) => update("district", e.target.value)} />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className={styles.grid}>
            <label>
              حداقل بودجه
              <input value={form.budgetMin} onChange={(e) => update("budgetMin", e.target.value)} />
            </label>
            <label>
              حداکثر بودجه
              <input value={form.budgetMax} onChange={(e) => update("budgetMax", e.target.value)} />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className={styles.grid}>
            <label>
              تعداد اتاق
              <input value={form.beds} onChange={(e) => update("beds", e.target.value)} />
            </label>
            <label>
              متراژ
              <input value={form.size} onChange={(e) => update("size", e.target.value)} />
            </label>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.actions}>
          {step > 0 && (
            <button type="button" onClick={back} className={styles.secondary}>
              قبلی
            </button>
          )}
          {step < steps.length - 1 ? (
            <button type="button" onClick={next}>
              بعدی
            </button>
          ) : (
            <button type="submit">ثبت نیاز</button>
          )}
        </div>
      </form>
    </main>
  );
}
