import React from 'react';
import { User, MapPin, Route as RouteIcon, Bus, Building2 } from 'lucide-react';

export const HeroRouteIllustration: React.FC = () => {
  const steps = [
    { label: 'Employee', icon: User, tag: '01' },
    { label: 'Pickup', icon: MapPin, tag: '02' },
    { label: 'Route', icon: RouteIcon, tag: '03' },
    { label: 'Vehicle', icon: Bus, tag: '04' },
    { label: 'Workplace', icon: Building2, tag: '05' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 bg-white/90 rounded-2xl border border-slate-200 shadow-card relative overflow-hidden backdrop-blur-sm">
      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* SVG Connecting Line with Animated Flowing Pulse (Desktop only) */}
      <div className="relative z-10">
        <div className="hidden sm:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 pointer-events-none">
          <div className="h-full bg-slate-900 w-1/3 animate-pulse rounded-full" />
        </div>

        {/* 5 Journey Nodes - Grid on Desktop, 2-col/3-col on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.label}
                className={`flex flex-col items-center text-center group transition-transform duration-300 ${
                  isLast ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center mb-1.5 sm:mb-3 shadow-subtle group-hover:bg-slate-900 group-hover:text-white transition-colors relative">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    {step.tag}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">{step.label}</span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Step</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
