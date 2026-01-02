import React, { useState } from 'react';
import { Logo } from '../components/tarinby/Logo';
import { OpportunityCard } from '../components/tarinby/OpportunityCard';
import { GradientButton } from '../components/tarinby/GradientButton';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

interface OpportunitiesListProps {
  onBack: () => void;
  onViewDetail: (id: number) => void;
}

export function OpportunitiesList({ onBack, onViewDetail }: OpportunitiesListProps) {
  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const opportunities = [
    {
      id: 1,
      matchScore: 92,
      priceFairness: 'ok' as const,
      riskBadges: [],
      title: 'آپارتمان ۹۵ متری در پاسداران',
      price: '۲.۸ میلیارد تومان',
      attributes: [
        { label: 'اتاق', value: '۲' },
        { label: 'متراژ', value: '۹۵ م²' },
        { label: 'طبقه', value: '۳' },
        { label: 'سن بنا', value: '۵ سال' }
      ]
    },
    {
      id: 2,
      matchScore: 87,
      priceFairness: 'low' as const,
      riskBadges: [],
      title: 'آپارتمان ۱۰۵ متری در ولنجک',
      price: '۲.۵ میلیارد تومان',
      attributes: [
        { label: 'اتاق', value: '۲' },
        { label: 'متراژ', value: '۱۰۵ م²' },
        { label: 'طبقه', value: '۲' },
        { label: 'سن بنا', value: '۸ سال' }
      ]
    },
    {
      id: 3,
      matchScore: 85,
      priceFairness: 'high' as const,
      riskBadges: ['قیمت بالاتر از میانگین'],
      title: 'آپارتمان ۸۵ متری در نیاوران',
      price: '۳.۲ میلیارد تومان',
      attributes: [
        { label: 'اتاق', value: '۲' },
        { label: 'متراژ', value: '۸۵ م²' },
        { label: 'طبقه', value: '۵' },
        { label: 'سن بنا', value: '۳ سال' }
      ]
    },
    {
      id: 4,
      matchScore: 78,
      priceFairness: 'ok' as const,
      riskBadges: ['نیاز به بررسی'],
      title: 'آپارتمان ۱۱۰ متری در فرمانیه',
      price: '۲.۹ میلیارد تومان',
      attributes: [
        { label: 'اتاق', value: '۲' },
        { label: 'متراژ', value: '۱۱۰ م²' },
        { label: 'طبقه', value: '۱' },
        { label: 'سن بنا', value: '۱۲ سال' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center gap-4">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                نیازهای من
              </button>
              <GradientButton variant="primary" size="sm" onClick={onBack}>
                ثبت نیاز جدید
              </GradientButton>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          dir="rtl"
        >
          <span>بازگشت</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Summary Header */}
        <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" dir="rtl">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ۱۲ فرصت مناسب نیاز شما پیدا شد
              </h1>
              <p className="text-white/90">
                آپارتمان ۲ خوابه در تهران، منطقه ۲ • بودجه ۲-۳ میلیارد
              </p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>فیلترها</span>
            </button>
          </div>
        </div>

        {/* Filters (collapsible) */}
        {showFilters && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-6" dir="rtl">
            <h3 className="font-semibold mb-4">فیلترها</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  حداقل درصد تطبیق
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="70"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  محدوده قیمت
                </label>
                <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg">
                  <option>همه</option>
                  <option>زیر ۲.۵ میلیارد</option>
                  <option>۲.۵ تا ۳ میلیارد</option>
                  <option>بالای ۳ میلیارد</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  منطقه
                </label>
                <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg">
                  <option>همه مناطق</option>
                  <option>منطقه ۱</option>
                  <option>منطقه ۲</option>
                  <option>منطقه ۳</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-6" dir="rtl">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">مرتب‌سازی:</span>
            <select className="bg-transparent border-none text-sm font-medium cursor-pointer">
              <option>بیشترین تطبیق</option>
              <option>کمترین قیمت</option>
              <option>بیشترین قیمت</option>
              <option>جدیدترین</option>
            </select>
          </div>
          <span className="text-sm text-muted-foreground">
            نمایش {opportunities.length} از ۱۲ فرصت
          </span>
        </div>

        {/* Opportunities Grid */}
        <div className="grid gap-6 mb-8">
          {opportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              {...opp}
              onViewDetails={() => onViewDetail(opp.id)}
              onRequestContact={() => {}}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <GradientButton variant="secondary" size="md">
            نمایش بیشتر
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
