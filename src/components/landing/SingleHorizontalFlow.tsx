import React from 'react';
import { Route, Navigation, Bus, UserCheck, Users, ChevronRight, ChevronDown } from 'lucide-react';

export const SingleHorizontalFlow: React.FC = () => {
  const steps = [
    { label: 'Routes', icon: Route },
    { label: 'Trips', icon: Navigation },
    { label: 'Vehicles', icon: Bus },
    { label: 'Drivers', icon: UserCheck },
    { label: 'Employees', icon: Users },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-4 sm:my-6 p-3.5 sm:p-5 bg-white/90 rounded-2xl border border-slate-200/80 shadow-subtle backdrop-blur-sm">
      <div className="flex flex-wrap sm:flex-row items-center justify-center sm:justify-between gap-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.label}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-50 border border-slate-200/70 rounded-xl text-slate-800 transition-colors">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-tight text-slate-900">{step.label}</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center text-slate-300">
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
