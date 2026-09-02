import React from 'react';
import { Route, Navigation, Bus, UserCheck, Users, ChevronRight } from 'lucide-react';

export const SubtleFlowVisual: React.FC = () => {
  const steps = [
    { label: 'Routes', icon: Route },
    { label: 'Trips', icon: Navigation },
    { label: 'Vehicles', icon: Bus },
    { label: 'Drivers', icon: UserCheck },
    { label: 'Employees', icon: Users },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl border border-slate-200/80 shadow-subtle">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.label}>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200/60 rounded-lg text-slate-800">
                <Icon className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="text-xs font-semibold tracking-wide">{step.label}</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center text-slate-300">
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
