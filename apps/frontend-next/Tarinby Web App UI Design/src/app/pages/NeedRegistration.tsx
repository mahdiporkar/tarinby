import React, { useState } from 'react';
import { Logo } from '../components/tarinby/Logo';
import { GradientButton } from '../components/tarinby/GradientButton';
import { Stepper } from '../components/tarinby/Stepper';
import { RTLInput, RTLSelect, RTLTextarea } from '../components/tarinby/RTLInput';
import { ArrowRight, Check } from 'lucide-react';

interface NeedRegistrationProps {
  onBack: () => void;
  onComplete: () => void;
}

export function NeedRegistration({ onBack, onComplete }: NeedRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [formData, setFormData] = useState({
    category: 'property',
    city: '',
    district: '',
    minBudget: '',
    maxBudget: '',
    bedrooms: '',
    minSize: '',
    maxSize: '',
    mustHave: [] as string[],
    additionalNotes: ''
  });

  const steps = ['انتخاب دسته‌بندی', 'مشخصات نیاز', 'تایید و ثبت'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleComplete = () => {
    onComplete();
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3" dir="rtl">نیاز شما ثبت شد!</h2>
          <p className="text-muted-foreground mb-6" dir="rtl">
            سیستم هوشمند Tarinby در حال جستجوی بهترین فرصت‌ها برای شماست
          </p>
          <GradientButton variant="primary" onClick={handleComplete} className="w-full">
            مشاهده فرصت‌ها
          </GradientButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            dir="rtl"
          >
            <span>بازگشت</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <h1 className="text-3xl font-bold mb-2" dir="rtl">ثبت نیاز جدید</h1>
          <p className="text-muted-foreground mb-8" dir="rtl">
            نیاز خود را با جزئیات کامل وارد کنید تا بهترین پیشنهادها را دریافت کنید
          </p>

          {/* Stepper */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            {/* Step 1: Category Selection */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h3 className="font-semibold mb-4" dir="rtl">دسته‌بندی کالا یا خدمت</h3>
                
                <div className="grid md:grid-cols-3 gap-4" dir="rtl">
                  {[
                    { value: 'property', label: 'املاک', icon: '🏠' },
                    { value: 'car', label: 'خودرو', icon: '🚗' },
                    { value: 'digital', label: 'کالای دیجیتال', icon: '💻' }
                  ].map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setFormData({ ...formData, category: cat.value })}
                      className={`
                        p-6 rounded-xl border-2 transition-all text-center
                        ${formData.category === cat.value
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="text-3xl mb-2">{cat.icon}</div>
                      <div className="font-medium">{cat.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === 1 && formData.category === 'property' && (
              <div className="space-y-6">
                <h3 className="font-semibold mb-4" dir="rtl">مشخصات ملک مورد نیاز</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <RTLSelect
                    label="شهر"
                    options={[
                      { value: '', label: 'انتخاب کنید' },
                      { value: 'tehran', label: 'تهران' },
                      { value: 'isfahan', label: 'اصفهان' },
                      { value: 'shiraz', label: 'شیراز' }
                    ]}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />

                  <RTLSelect
                    label="منطقه"
                    options={[
                      { value: '', label: 'انتخاب کنید' },
                      { value: 'district1', label: 'منطقه ۱' },
                      { value: 'district2', label: 'منطقه ۲' },
                      { value: 'district3', label: 'منطقه ۳' }
                    ]}
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" dir="rtl">
                    محدوده قیمت (تومان)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <RTLInput
                      placeholder="حداقل"
                      value={formData.minBudget}
                      onChange={(e) => setFormData({ ...formData, minBudget: e.target.value })}
                    />
                    <RTLInput
                      placeholder="حداکثر"
                      value={formData.maxBudget}
                      onChange={(e) => setFormData({ ...formData, maxBudget: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <RTLSelect
                    label="تعداد اتاق"
                    options={[
                      { value: '', label: 'انتخاب کنید' },
                      { value: '1', label: '۱ خوابه' },
                      { value: '2', label: '۲ خوابه' },
                      { value: '3', label: '۳ خوابه' },
                      { value: '4+', label: '۴+ خوابه' }
                    ]}
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" dir="rtl">
                      متراژ (مترمربع)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <RTLInput
                        placeholder="از"
                        value={formData.minSize}
                        onChange={(e) => setFormData({ ...formData, minSize: e.target.value })}
                      />
                      <RTLInput
                        placeholder="تا"
                        value={formData.maxSize}
                        onChange={(e) => setFormData({ ...formData, maxSize: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-foreground" dir="rtl">
                    امکانات ضروری
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['پارکینگ', 'انباری', 'آسانسور', 'بالکن'].map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                        dir="rtl"
                      >
                        <input
                          type="checkbox"
                          checked={formData.mustHave.includes(amenity)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({ ...formData, mustHave: [...formData.mustHave, amenity] });
                            } else {
                              setFormData({ ...formData, mustHave: formData.mustHave.filter(a => a !== amenity) });
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <span>{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <RTLTextarea
                  label="توضیحات تکمیلی (اختیاری)"
                  placeholder="هر گونه توضیحات اضافی که فکر می‌کنید مفید است..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                />
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="font-semibold mb-4" dir="rtl">بررسی و تایید نیاز</h3>

                <div className="space-y-4 bg-muted/30 rounded-xl p-6" dir="rtl">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">دسته‌بندی:</span>
                    <span className="font-medium">املاک</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">محل:</span>
                    <span className="font-medium">تهران، منطقه ۲</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">بودجه:</span>
                    <span className="font-medium">۲ تا ۳ میلیارد تومان</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">تعداد اتاق:</span>
                    <span className="font-medium">۲ خوابه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">متراژ:</span>
                    <span className="font-medium">۸۰ تا ۱۲۰ متر</span>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4" dir="rtl">
                  <p className="text-sm text-blue-400">
                    پس از ثبت نیاز، سیستم هوشمند Tarinby شروع به جستجو و تحلیل بهترین فرصت‌های بازار برای شما می‌کند.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8" dir="rtl">
              <GradientButton
                variant="primary"
                onClick={handleNext}
                className="flex-1"
              >
                {currentStep === steps.length - 1 ? 'ثبت نیاز' : 'بعدی'}
              </GradientButton>
              {currentStep > 0 && (
                <GradientButton
                  variant="secondary"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1"
                >
                  قبلی
                </GradientButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
