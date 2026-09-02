import React from 'react';
import { User, MapPin, Route as RouteIcon, Bus, Building2, ChevronRight } from 'lucide-react';

export const RouteVisual: React.FC = () => {
  const flowSteps = [
    { label: 'Employee', subtext: 'Roster & Shifts', icon: User },
    { label: 'Pickup Point', subtext: 'Designated Stops', icon: MapPin },
    { label: 'Route', subtext: 'Optimized Path', icon: RouteIcon },
    { label: 'Vehicle', subtext: 'Fleet & Driver', icon: Bus },
    { label: 'Workplace', subtext: 'On-Time Arrival', icon: Building2 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 bg-white rounded-2xl border border-slate-200 shadow-subtle relative overflow-hidden">
      {/* Background Subtle Radial Dot Pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 space-y-6">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Connected Transportation Flow
          </span>
        </div>

        {/* Horizontal Flow Steps for Desktop / Stacked for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center justify-between">
          {flowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/80 border border-slate-200/90 rounded-xl transition-all hover:bg-white hover:shadow-subtle">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-2 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 block">{step.label}</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">{step.subtext}</span>
                </div>

                {/* Arrow connector between steps (desktop only) */}
                {idx < flowSteps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center text-slate-300 -mx-3">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Subtle Bottom Caption */}
        <div className="pt-2 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            Seamless end-to-end employee commute management
          </span>
        </div>
      </div>
    </div>
  );
};
