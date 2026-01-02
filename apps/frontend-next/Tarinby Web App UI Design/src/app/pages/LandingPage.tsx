import React from 'react';
import { Logo } from '../components/tarinby/Logo';
import { GradientButton } from '../components/tarinby/GradientButton';
import { CircleCheck, Target, Zap, Shield, Clock, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroNetwork from 'figma:asset/3ea704108b904285785cda3c0c6cb826b9b66fac.png';
import heroBrain from 'figma:asset/c4c7779091a88f803a10fb1123d8f2ff650d5dc5.png';

interface LandingPageProps {
  onRegisterNeed: () => void;
  onViewOpportunities: () => void;
}

export function LandingPage({ onRegisterNeed, onViewOpportunities }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center gap-4">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ورود
              </button>
              <GradientButton variant="primary" size="sm" onClick={onRegisterNeed}>
                ثبت نیاز
              </GradientButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        {/* Background Images with Overlay - Dual Layer Effect */}
        <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 z-0">
          <div className="relative w-full h-full">
            {/* Network Background Layer */}
            <img
              src={heroNetwork}
              alt="AI Network"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Brain Overlay Layer */}
            <img
              src={heroBrain}
              alt="Smart Intelligence"
              className="absolute inset-0 w-full h-full object-contain opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" dir="rtl">
            خرید خوب، با آگاهی
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" dir="rtl">
            نیازتو ثبت کن، پیشنهادهای دقیق بگیر، با خیال راحت خرید کن.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" dir="rtl">
            <GradientButton variant="primary" size="lg" onClick={onRegisterNeed}>
              ثبت نیاز
            </GradientButton>
            <GradientButton variant="secondary" size="lg" onClick={onViewOpportunities}>
              دیدن فرصت‌های بازار
            </GradientButton>
          </div>
        </div>
      </section>

      {/* How It Works with Background */}
      <section className="relative bg-card/50 py-16 md:py-24 overflow-hidden">
        {/* Background Pattern - Tech Network Style */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1636703781908-a5e63be992a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3Mjk2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital Network"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-card/70 to-background/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" dir="rtl">
            چطور کار می‌کنه؟
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center p-6" dir="rtl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">ثبت نیاز</h3>
              <p className="text-muted-foreground">
                نیاز خودتون رو با جزئیات کامل ثبت کنید
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6" dir="rtl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">تطبیق هوشمند</h3>
              <p className="text-muted-foreground">
                سیستم هوشمند Tarinby بهترین گزینه‌ها رو پیدا می‌کنه
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6" dir="rtl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl flex items-center justify-center">
                <CircleCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">پیشنهاد هدفمند</h3>
              <p className="text-muted-foreground">
                فقط پیشنهادهای مناسب و بررسی شده دریافت کنید
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with AI gradient overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY3MjYyMjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Intelligence"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" dir="rtl">
              چرا Tarinby؟
            </h2>
            <p className="text-center text-muted-foreground mb-12" dir="rtl">
              فرق ما با سایت‌های آگهی معمولی
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Trust Card 1 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors" dir="rtl">
                <div className="w-12 h-12 mb-4 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="mb-2">کاهش ریسک</h3>
                <p className="text-muted-foreground text-sm">
                  با بررسی و تحلیل هوشمند، از گزینه‌های مشکوک و نامناسب دوری کنید
                </p>
              </div>

              {/* Trust Card 2 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors" dir="rtl">
                <div className="w-12 h-12 mb-4 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="mb-2">صرفه‌جویی در زمان</h3>
                <p className="text-muted-foreground text-sm">
                  به جای جستجو در هزاران آگهی، فقط گزینه‌های مناسب رو ببینید
                </p>
              </div>

              {/* Trust Card 3 */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors" dir="rtl">
                <div className="w-12 h-12 mb-4 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="mb-2">تصمیم‌گیری آگاهانه</h3>
                <p className="text-muted-foreground text-sm">
                  با دسترسی به تحلیل قیمت و مقایسه بازار، بهترین تصمیم رو بگیرید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Premium Background */}
      <section className="relative bg-gradient-to-r from-[#3b82f6] to-[#10b981] py-16 overflow-hidden">
        {/* Luxury background overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1746461147623-75ddedfb6ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc2NzMxOTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium Design"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dir="rtl">
            آماده‌اید برای خرید هوشمند؟
          </h2>
          <p className="text-white/90 mb-8 text-lg" dir="rtl">
            همین حالا نیاز خودتون رو ثبت کنید
          </p>
          <button
            onClick={onRegisterNeed}
            className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors shadow-xl"
          >
            شروع کنید
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo size="sm" />
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">درباره ما</a>
              <a href="#" className="hover:text-foreground transition-colors">تماس با ما</a>
              <a href="#" className="hover:text-foreground transition-colors">شرایط استفاده</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Tarinby.com | Tarinby.ir
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}