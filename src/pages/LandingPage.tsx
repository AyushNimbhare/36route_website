import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { GetNotifiedModal } from '../components/landing/GetNotifiedModal';
import { HeroRouteIllustration } from '../components/landing/HeroRouteIllustration';
import { SingleHorizontalFlow } from '../components/landing/SingleHorizontalFlow';
import { Route, Eye, Sliders, Sparkles } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const threePoints = [
    { title: 'Smart routing', description: 'Intelligent corridor planning & optimization.', icon: Route },
    { title: 'Trip visibility', description: 'Real-time daily status and tracking transparency.', icon: Eye },
    { title: 'Simpler operations', description: 'Unified management for vehicles, drivers & rosters.', icon: Sliders },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white overflow-x-hidden">
      {/* 1. HEADER */}
      <header className="h-14 sm:h-16 border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40 px-3.5 sm:px-8 flex items-center justify-between">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          {/* Left: Official 36Route Logo */}
          <div className="flex items-center">
            <img
              src="/36route.png"
              alt="36Route Logo"
              className="h-7 sm:h-9 w-auto object-contain"
            />
          </div>

          {/* Right: Coming Soon Badge */}
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Coming Soon
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-12 sm:space-y-20">
        {/* 2. HERO — MAIN FOCUS WITH SUBTLE TRANSPORTATION BACKGROUND */}
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-10 text-center max-w-4xl mx-auto border border-slate-200/90 shadow-card bg-white">
          {/* Subtle Aerial Transportation Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
            style={{ backgroundImage: 'url("/hero-bg.png")' }}
          />
          {/* Light Overlay for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/80 to-white/95 backdrop-blur-[1px] pointer-events-none" />

          {/* Hero Content Layer */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3.5 sm:space-y-4">
            {/* Prominent Official 36Route Logo */}
            <div className="flex justify-center mb-1">
              <img
                src="/36route.png"
                alt="36Route Official Brand Identity"
                className="h-10 sm:h-16 w-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-slate-100/90 border border-slate-200/90 text-slate-700 text-[11px] sm:text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              COMING SOON
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-2xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              Employee transportation,<br />
              made simpler.
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed font-normal px-1">
              36Route is building a smarter way for companies to manage employee transportation, routes, vehicles and daily trips — all in one place.
            </p>

            {/* CTA */}
            <div className="pt-1.5 sm:pt-2 flex justify-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto shadow-md px-7 py-3 text-xs sm:text-sm active:scale-98 transition-transform"
                icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
              >
                Get Notified
              </Button>
            </div>
          </div>
        </section>

        {/* 3. HERO VISUAL (Positioned cleanly below main hero card) */}
        <section className="-mt-4 sm:-mt-6">
          <HeroRouteIllustration />
        </section>

        {/* 4. PRODUCT INTRODUCTION ("One platform. One simpler commute.") */}
        <section className="space-y-4 sm:space-y-6 pt-2 text-center max-w-3xl mx-auto">
          <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto px-2">
            <h2 className="font-display text-xl sm:text-3xl font-bold tracking-tight text-slate-900">
              One platform. One simpler commute.
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              36Route brings the essential parts of employee transportation together — from routes and trips to vehicles, drivers and employees.
            </p>
          </div>

          {/* Clean Horizontal Flow Visual (NOT clickable navigation) */}
          <SingleHorizontalFlow />
        </section>

        {/* 5. VISUAL DEPTH & 6. SMALL PRODUCT STATEMENT */}
        <section className="bg-white/90 border border-slate-200/90 rounded-2xl p-5 sm:p-12 shadow-subtle space-y-6 sm:space-y-8 max-w-4xl mx-auto relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Purpose</span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-slate-900">
              Built to make employee transportation easier.
            </h3>
          </div>

          {/* 3 Simple Light Feature Columns */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 pt-1 text-center">
            {threePoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.title} className="flex flex-col items-center space-y-2 px-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center shadow-subtle">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{pt.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xs">{pt.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. FINAL COMING SOON SECTION */}
        <section className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-12 text-center max-w-2xl mx-auto shadow-subtle space-y-4 sm:space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-semibold border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            Coming Soon
          </div>

          <div className="space-y-1.5 sm:space-y-2 px-2">
            <h2 className="font-display text-xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Something better is on the way.
            </h2>
            <p className="text-xs sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              36Route is currently under development. We're building a simpler transportation experience for modern workplaces.
            </p>
          </div>

          {/* Single Clean Get Notified Button */}
          <div className="pt-1 sm:pt-2 flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm shadow-subtle"
              icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
            >
              Get Notified
            </Button>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8 sm:py-10 px-4 sm:px-8 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start mb-1">
              <img
                src="/36route.png"
                alt="36Route Logo"
                className="h-5 sm:h-7 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500">Smart employee transportation, simplified.</p>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
            © 2026 36Route. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Get Notified Modal */}
      <GetNotifiedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
