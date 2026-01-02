import React from 'react';
import { GradientButton } from './GradientButton';

interface OpportunityCardProps {
  matchScore: number;
  priceFairness: 'low' | 'ok' | 'high';
  riskBadges?: string[];
  title: string;
  price: string;
  attributes: { label: string; value: string }[];
  onViewDetails: () => void;
  onRequestContact: () => void;
}

export function OpportunityCard({
  matchScore,
  priceFairness,
  riskBadges = [],
  title,
  price,
  attributes,
  onViewDetails,
  onRequestContact
}: OpportunityCardProps) {
  const priceFairnessConfig = {
    low: { text: 'قیمت پایین', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    ok: { text: 'قیمت متعادل', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    high: { text: 'قیمت بالا', color: 'bg-red-500/10 text-red-400 border-red-500/20' }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-4" dir="rtl">
        <div className="flex-1">
          <h3 className="mb-2">{title}</h3>
          <p className="text-2xl font-semibold bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">
            {price}
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {/* Match Score */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-xl px-3 py-1.5">
            <span className="text-sm font-semibold">{matchScore}%</span>
            <span className="text-xs opacity-90">تطبیق</span>
          </div>
          
          {/* Price Fairness */}
          <div className={`border rounded-lg px-3 py-1 text-xs ${priceFairnessConfig[priceFairness].color}`}>
            {priceFairnessConfig[priceFairness].text}
          </div>
        </div>
      </div>

      {/* Risk Badges */}
      {riskBadges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4" dir="rtl">
          {riskBadges.map((badge, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-warning/10 text-warning border border-warning/20 rounded-lg"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Attributes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6" dir="rtl">
        {attributes.map((attr, index) => (
          <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">{attr.label}</div>
            <div className="font-medium">{attr.value}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3" dir="rtl">
        <GradientButton
          variant="primary"
          size="sm"
          onClick={onViewDetails}
          className="flex-1"
        >
          بررسی جزئیات
        </GradientButton>
        <GradientButton
          variant="secondary"
          size="sm"
          onClick={onRequestContact}
          className="flex-1"
        >
          درخواست ارتباط
        </GradientButton>
      </div>
    </div>
  );
}
