import React, { useState } from 'react';
import { Logo } from '../components/tarinby/Logo';
import { GradientButton } from '../components/tarinby/GradientButton';
import { RTLInput, RTLTextarea } from '../components/tarinby/RTLInput';
import { ArrowRight, Target, Zap, CreditCard, CircleCheck } from 'lucide-react';

interface SellerOnboardingProps {
  onBack: () => void;
}

export function SellerOnboarding({ onBack }: SellerOnboardingProps) {
  const [listingUrl, setListingUrl] = useState('');
  const [showMatchResults, setShowMatchResults] = useState(false);

  const handleSubmit = () => {
    setShowMatchResults(true);
  };

  if (showMatchResults) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Logo size="md" />
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              dir="rtl"
            >
              <span>بازگشت</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-full flex items-center justify-center">
                  <CircleCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2" dir="rtl">
                  آگهی شما ثبت شد!
                </h2>
                <p className="text-muted-foreground" dir="rtl">
                  سیستم هوشمند Tarinby آگهی شما را تحلیل کرد
                </p>
              </div>

              {/* Match Summary */}
              <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl p-6 mb-6">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-2">۸</div>
                  <div className="text-white/90">خریدار واقعی با نیاز مطابق پیدا شد</div>
                </div>
              </div>

              {/* Matched Needs */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold" dir="rtl">خریداران واجد شرایط</h3>
                
                {[
                  { score: 95, budget: '۲.۵-۳ میلیارد', location: 'تهران، منطقه ۲', verified: true },
                  { score: 89, budget: '۲.۸-۳.۲ میلیارد', location: 'تهران، منطقه ۱ و ۲', verified: true },
                  { score: 87, budget: '۲-۳ میلیارد', location: 'تهران، منطقه ۲ و ۳', verified: false }
                ].map((buyer, index) => (
                  <div key={index} className="bg-muted/30 rounded-xl p-4 flex items-center justify-between" dir="rtl">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">خریدار #{index + 1}</span>
                        {buyer.verified && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-md">
                            تایید شده
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>بودجه: {buyer.budget}</div>
                        <div>محل: {buyer.location}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">
                        {buyer.score}%
                      </div>
                      <div className="text-xs text-muted-foreground">تطبیق</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Info */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6" dir="rtl">
                <h4 className="font-medium text-blue-400 mb-2">مدل قیمت‌گذاری Tarinby</h4>
                <ul className="space-y-2 text-sm">
                  <li>• فقط برای هر درخواست واقعی از خریدار، هزینه پرداخت می‌کنید</li>
                  <li>• خریداران تایید هویت شده و جدی هستند</li>
                  <li>• هزینه هر درخواست: ۱۰۰,۰۰۰ تومان</li>
                  <li>• می‌توانید درخواست‌ها را قبل از پذیرش ببینید</li>
                </ul>
              </div>

              {/* CTA */}
              <GradientButton variant="primary" className="w-full mb-3">
                مشاهده و پذیرش درخواست‌ها
              </GradientButton>
              <GradientButton variant="secondary" onClick={onBack} className="w-full">
                بازگشت به صفحه اصلی
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo size="md" />
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          dir="rtl"
        >
          <span>بازگشت</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" dir="rtl">
              آگهی خود را در Tarinby ثبت کنید
            </h1>
            <p className="text-lg text-muted-foreground" dir="rtl">
              به خریداران واقعی و جدی دسترسی پیدا کنید
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card border border-border rounded-2xl" dir="rtl">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">خریداران واقعی</h3>
              <p className="text-sm text-muted-foreground">
                فقط با افرادی که واقعاً به دنبال خرید هستند در ارتباط باشید
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border rounded-2xl" dir="rtl">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500/10 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">تطبیق هوشمند</h3>
              <p className="text-sm text-muted-foreground">
                آگهی شما به خریدارانی که نیازشان مطابقت دارد نشان داده می‌شود
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border rounded-2xl" dir="rtl">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">پرداخت عادلانه</h3>
              <p className="text-sm text-muted-foreground">
                فقط برای هر درخواست واقعی هزینه پرداخت کنید
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6" dir="rtl">
              ثبت آگهی
            </h2>

            <div className="space-y-6">
              {/* URL Paste Option */}
              <div>
                <RTLInput
                  label="لینک آگهی از سایت دیگر (اختیاری)"
                  placeholder="https://divar.ir/v/..."
                  value={listingUrl}
                  onChange={(e) => setListingUrl(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2" dir="rtl">
                  می‌توانید لینک آگهی از دیوار، شیپور یا سایت‌های دیگر را وارد کنید
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">یا</span>
                </div>
              </div>

              {/* Manual Entry */}
              <div className="space-y-4">
                <h3 className="font-medium" dir="rtl">ثبت دستی اطلاعات</h3>
                
                <RTLInput
                  label="عنوان آگهی"
                  placeholder="مثلاً: آپارتمان ۹۵ متری در پاسداران"
                />

                <RTLInput
                  label="قیمت (تومان)"
                  placeholder="مثلاً: ۲,۸۰۰,۰۰۰,۰۰۰"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <RTLInput label="متراژ (متر مربع)" placeholder="۹۵" />
                  <RTLInput label="تعداد اتاق" placeholder="۲" />
                </div>

                <RTLTextarea
                  label="توضیحات"
                  placeholder="توضیحات کامل درباره ملک..."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <GradientButton
                  variant="primary"
                  onClick={handleSubmit}
                  className="w-full"
                >
                  ثبت آگهی و مشاهده خریداران
                </GradientButton>
                <p className="text-xs text-center text-muted-foreground mt-3" dir="rtl">
                  با ثبت آگهی، شرایط استفاده Tarinby را می‌پذیرید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}