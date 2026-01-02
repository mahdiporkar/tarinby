import React from 'react';
import { Check } from 'lucide-react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full py-8" dir="rtl">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 right-0 h-0.5 bg-muted w-full -z-10" />
        <div
          className="absolute top-5 right-0 h-0.5 bg-gradient-to-l from-[#3b82f6] to-[#10b981] -z-10 transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center gap-2 relative">
              {/* Step Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 border-2
                  ${isCompleted || isCurrent
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] border-transparent'
                    : 'bg-card border-muted'
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className={isCurrent ? 'text-white font-semibold' : 'text-muted-foreground'}>
                    {index + 1}
                  </span>
                )}
              </div>
              
              {/* Step Label */}
              <span className={`text-sm text-center ${isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
