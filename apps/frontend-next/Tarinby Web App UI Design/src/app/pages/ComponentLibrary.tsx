import React from 'react';
import { Logo } from '../components/tarinby/Logo';
import { GradientButton } from '../components/tarinby/GradientButton';
import { OpportunityCard } from '../components/tarinby/OpportunityCard';
import { Stepper } from '../components/tarinby/Stepper';
import { RTLInput, RTLSelect, RTLTextarea } from '../components/tarinby/RTLInput';
import { ArrowRight } from 'lucide-react';

interface ComponentLibraryProps {
  onBack: () => void;
}

export function ComponentLibrary({ onBack }: ComponentLibraryProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
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

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tarinby Design System</h1>
            <p className="text-muted-foreground">
              Component library and design tokens for development handoff
            </p>
          </div>

          {/* Colors */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Colors</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Background</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#0a0e1a] border border-white/10"></div>
                    <div>
                      <div className="font-mono text-sm">#0a0e1a</div>
                      <div className="text-xs text-muted-foreground">Primary BG</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#131720] border border-white/10"></div>
                    <div>
                      <div className="font-mono text-sm">#131720</div>
                      <div className="text-xs text-muted-foreground">Card BG</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Gradient (Primary)</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#3b82f6]"></div>
                    <div>
                      <div className="font-mono text-sm">#3b82f6</div>
                      <div className="text-xs text-muted-foreground">Blue</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#10b981]"></div>
                    <div>
                      <div className="font-mono text-sm">#10b981</div>
                      <div className="text-xs text-muted-foreground">Green</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-12 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#10b981]"></div>
                    <div className="text-xs text-muted-foreground">Gradient</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Semantic Colors</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#10b981]"></div>
                    <div>
                      <div className="font-mono text-sm">#10b981</div>
                      <div className="text-xs text-muted-foreground">Success</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#f59e0b]"></div>
                    <div>
                      <div className="font-mono text-sm">#f59e0b</div>
                      <div className="text-xs text-muted-foreground">Warning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#ef4444]"></div>
                    <div>
                      <div className="font-mono text-sm">#ef4444</div>
                      <div className="text-xs text-muted-foreground">Destructive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Spacing System</h2>
            <p className="text-muted-foreground mb-4">8px base unit (0.5rem increments)</p>
            <div className="space-y-3">
              {[
                { value: '8px', label: '1 unit', class: 'w-2' },
                { value: '16px', label: '2 units', class: 'w-4' },
                { value: '24px', label: '3 units', class: 'w-6' },
                { value: '32px', label: '4 units', class: 'w-8' },
                { value: '48px', label: '6 units', class: 'w-12' }
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-4">
                  <div className={`${item.class} h-2 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded`}></div>
                  <span className="font-mono text-sm">{item.value}</span>
                  <span className="text-xs text-muted-foreground">({item.label})</span>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-sm font-medium mb-2">8px - Small</div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-lg"></div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-sm font-medium mb-2">12px - Medium (Default)</div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-xl"></div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4">
                <div className="text-sm font-medium mb-2">16px - Large</div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-2xl"></div>
              </div>
            </div>
          </section>

          {/* Logo */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Logo</h2>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-8">
                  <Logo size="sm" />
                  <span className="text-xs text-muted-foreground">Small</span>
                </div>
                <div className="flex items-center gap-8">
                  <Logo size="md" />
                  <span className="text-xs text-muted-foreground">Medium (Default)</span>
                </div>
                <div className="flex items-center gap-8">
                  <Logo size="lg" />
                  <span className="text-xs text-muted-foreground">Large</span>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Buttons</h2>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <GradientButton variant="primary">Primary Button</GradientButton>
                  <GradientButton variant="secondary">Secondary Button</GradientButton>
                  <GradientButton variant="outline">Outline Button</GradientButton>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <GradientButton size="sm">Small</GradientButton>
                  <GradientButton size="md">Medium</GradientButton>
                  <GradientButton size="lg">Large</GradientButton>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">RTL (Persian)</h3>
                <div className="flex flex-wrap gap-4">
                  <GradientButton variant="primary">ثبت نیاز</GradientButton>
                  <GradientButton variant="secondary">مشاهده فرصت‌ها</GradientButton>
                </div>
              </div>
            </div>
          </section>

          {/* Form Inputs */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Form Inputs (RTL)</h2>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6 max-w-2xl">
              <RTLInput label="نام کامل" placeholder="نام و نام خانوادگی" />
              <RTLSelect
                label="شهر"
                options={[
                  { value: '', label: 'انتخاب کنید' },
                  { value: 'tehran', label: 'تهران' },
                  { value: 'isfahan', label: 'اصفهان' }
                ]}
              />
              <RTLTextarea label="توضیحات" placeholder="توضیحات خود را وارد کنید..." />
            </div>
          </section>

          {/* Stepper */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Stepper</h2>
            <div className="bg-card border border-border rounded-2xl p-8">
              <Stepper steps={['انتخاب دسته', 'مشخصات', 'تایید']} currentStep={1} />
            </div>
          </section>

          {/* Opportunity Card */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Opportunity Card</h2>
            <div className="max-w-3xl">
              <OpportunityCard
                matchScore={92}
                priceFairness="ok"
                riskBadges={[]}
                title="آپارتمان ۹۵ متری در پاسداران"
                price="۲.۸ میلیارد تومان"
                attributes={[
                  { label: 'اتاق', value: '۲' },
                  { label: 'متراژ', value: '۹۵ م²' },
                  { label: 'طبقه', value: '۳' },
                  { label: 'سن بنا', value: '۵ سال' }
                ]}
                onViewDetails={() => {}}
                onRequestContact={() => {}}
              />
            </div>
          </section>

          {/* Badges & Chips */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Badges & Status Indicators</h2>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3" dir="rtl">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-sm">
                    قیمت پایین
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm">
                    قیمت متعادل
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-sm">
                    قیمت بالا
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-sm">
                    نیاز به بررسی
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-xl px-3 py-1.5 text-white text-sm font-semibold">
                    92% تطبیق
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Typography</h2>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div>
                <h1 className="mb-2">Heading 1 / عنوان ۱</h1>
                <p className="text-xs text-muted-foreground font-mono">font-size: 2xl, font-weight: 500</p>
              </div>
              <div>
                <h2 className="mb-2">Heading 2 / عنوان ۲</h2>
                <p className="text-xs text-muted-foreground font-mono">font-size: xl, font-weight: 500</p>
              </div>
              <div>
                <h3 className="mb-2">Heading 3 / عنوان ۳</h3>
                <p className="text-xs text-muted-foreground font-mono">font-size: lg, font-weight: 500</p>
              </div>
              <div>
                <p className="mb-2">Body Text / متن معمولی با فونت Vazirmatn برای فارسی و Inter برای انگلیسی</p>
                <p className="text-xs text-muted-foreground font-mono">font-size: base, font-weight: 400</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Small text / متن کوچک</p>
                <p className="text-xs text-muted-foreground font-mono">font-size: sm, color: muted-foreground</p>
              </div>
            </div>
          </section>

          {/* Shadows */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Shadows</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="text-sm font-medium">Small Shadow</div>
                <div className="text-xs text-muted-foreground font-mono mt-2">shadow-sm</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <div className="text-sm font-medium">Medium Shadow</div>
                <div className="text-xs text-muted-foreground font-mono mt-2">shadow-md</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="text-sm font-medium">Large Shadow</div>
                <div className="text-xs text-muted-foreground font-mono mt-2">shadow-lg</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
