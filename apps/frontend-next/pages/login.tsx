import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { apiFetch } from '../lib/api';
import { GradientButton } from '../components/tarinby/GradientButton';
import { Logo } from '../components/tarinby/Logo';
import { RTLInput, RTLSelect } from '../components/tarinby/RTLInput';

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('BUYER');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ phone, role })
      });
      const data = await response.json();
      localStorage.setItem('tarinby_token', data.accessToken);
      router.push('/opportunities');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <Logo size="md" />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center" dir="rtl">
          ورود سریع
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
          <RTLInput
            label="شماره موبایل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0912..."
          />
          <RTLSelect
            label="نقش"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={[
              { value: 'BUYER', label: 'خریدار' },
              { value: 'SELLER', label: 'فروشنده' }
            ]}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <GradientButton variant="primary" className="w-full" disabled={loading}>
            {loading ? 'در حال ورود...' : 'ورود'}
          </GradientButton>
        </form>
      </div>
    </div>
  );
}
