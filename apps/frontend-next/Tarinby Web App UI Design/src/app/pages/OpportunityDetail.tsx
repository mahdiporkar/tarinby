import React, { useState } from 'react';
import { Logo } from '../components/tarinby/Logo';
import { GradientButton } from '../components/tarinby/GradientButton';
import { ArrowRight, CircleCheck, TriangleAlert, TrendingUp, MessageCircle } from 'lucide-react';

interface OpportunityDetailProps {
  onBack: () => void;
}

export function OpportunityDetail({ onBack }: OpportunityDetailProps) {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);

  const handleRequestContact = () => {
    // Simulate user not signed in
    setShowSignInModal(true);
  };

  const handleSignIn = () => {
    setShowSignInModal(false);
    setShowPaywallModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          dir="rtl"
        >
          <span>بازگشت به لیست</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Match Score Card */}
            <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl p-6">
              <div className="flex items-center justify-between text-white" dir="rtl">
                <div>
                  <div className="text-5xl font-bold mb-2">۹۲%</div>
                  <div className="text-white/90">تطبیق با نیاز شما</div>
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <CircleCheck className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4" dir="rtl">
                آپارتمان ۹۵ متری در پاسداران
              </h2>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent mb-6" dir="rtl">
                ۲.۸ میلیارد تومان
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'اتاق', value: '۲' },
                  { label: 'متراژ', value: '۹۵ م²' },
                  { label: 'طبقه', value: '۳' },
                  { label: 'سن بنا', value: '۵ سال' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-muted/30 rounded-xl" dir="rtl">
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3" dir="rtl">امکانات</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['پارکینگ', 'انباری', 'آسانسور', 'بالکن', 'گاز رومیزی', 'کابینت MDF'].map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2" dir="rtl">
                      <CircleCheck className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Good/Bad Match */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4" dir="rtl">تحلیل هوشمند Tarinby</h3>

              <div className="space-y-4">
                {/* Good Points */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3" dir="rtl">
                    <CircleCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-400 mb-2">چرا این گزینه مناسب است</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• قیمت در محدوده بودجه شماست</li>
                        <li>• تمام امکانات ضروری مورد نیاز شما را دارد</li>
                        <li>• سن بنا مناسب و طبقه ایده‌آل</li>
                        <li>• قیمت نسبت به میانگین منطقه منصفانه است</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Caution Points */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3" dir="rtl">
                    <TriangleAlert className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-2">نکات قابل بررسی</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• متراژ کمی کمتر از حد میانگین نیاز شماست</li>
                        <li>• پیشنهاد می‌شود وضعیت دقیق پارکینگ را بررسی کنید</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Market Price Widget */}
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4" dir="rtl">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">تحلیل قیمت بازار</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/30 rounded-xl p-4" dir="rtl">
                  <div className="text-xs text-muted-foreground mb-2">میانگین قیمت منطقه</div>
                  <div className="text-xl font-bold">۲.۹ میلیارد تومان</div>
                  <div className="text-xs text-muted-foreground mt-1">برای ملک مشابه</div>
                </div>

                <div className="space-y-2" dir="rtl">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">کمترین قیمت</span>
                    <span>۲.۳ میلیارد</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">بیشترین قیمت</span>
                    <span>۳.۵ میلیارد</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-2" dir="rtl">
                    <span className="text-sm">وضعیت قیمت</span>
                    <span className="text-sm font-medium text-green-400">مناسب</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 space-y-3">
                <GradientButton
                  variant="primary"
                  onClick={handleRequestContact}
                  className="w-full"
                >
                  درخواست ارتباط با فروشنده
                </GradientButton>
                <GradientButton
                  variant="secondary"
                  className="w-full"
                >
                  ذخیره فرصت
                </GradientButton>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4" dir="rtl">
                برای دسترسی به اطلاعات تماس نیاز به احراز هویت دارید
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4" dir="rtl">ورود به حساب کاربری</h3>
            <p className="text-muted-foreground mb-6" dir="rtl">
              برای درخواست ارتباط با فروشنده، ابتدا وارد حساب کاربری خود شوید
            </p>
            <div className="space-y-4 mb-6">
              <input
                type="tel"
                placeholder="شماره موبایل"
                className="w-full px-4 py-3 bg-input-background border border-input rounded-xl"
                dir="rtl"
              />
            </div>
            <div className="flex gap-3">
              <GradientButton variant="primary" onClick={handleSignIn} className="flex-1">
                ورود
              </GradientButton>
              <GradientButton variant="secondary" onClick={() => setShowSignInModal(false)} className="flex-1">
                انصراف
              </GradientButton>
            </div>
          </div>
        </div>
      )}

      {/* Paywall Modal */}
      {showPaywallModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2" dir="rtl">درخواست ارتباط</h3>
              <p className="text-muted-foreground" dir="rtl">
                برای دسترسی به اطلاعات تماس فروشنده و شروع چت امن
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4" dir="rtl">
                <span>هزینه درخواست</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">
                  ۵۰,۰۰۰ تومان
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground" dir="rtl">
                <li className="flex items-center gap-2">
                  <CircleCheck className="w-4 h-4 text-green-400" />
                  <span>دسترسی به اطلاعات تماس فروشنده</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="w-4 h-4 text-green-400" />
                  <span>امکان چت امن با فروشنده</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="w-4 h-4 text-green-400" />
                  <span>پشتیبانی اختصاصی Tarinby</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <GradientButton variant="primary" className="flex-1">
                پرداخت و درخواست ارتباط
              </GradientButton>
              <GradientButton variant="secondary" onClick={() => setShowPaywallModal(false)} className="flex-1">
                انصراف
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}