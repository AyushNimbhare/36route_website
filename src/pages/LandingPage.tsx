import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { GetNotifiedModal } from '../components/landing/GetNotifiedModal';
import { HeroRouteIllustration } from '../components/landing/HeroRouteIllustration';
import { SingleHorizontalFlow } from '../components/landing/SingleHorizontalFlow';
import { BrandLogo } from '../components/common/BrandLogo';
import { CurtainReveal } from '../components/landing/CurtainReveal';
import { LAUNCH_DATE_IST } from '../components/landing/CountdownTimer';
import { Sparkles, RefreshCw, Play } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Starts locked behind curtain reveal overlay for 1-minute test
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  return (
    <div className={`h-screen max-h-screen overflow-hidden ${isCurtainOpen ? 'bg-slate-50' : 'bg-slate-950'} text-slate-900 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white relative transition-colors duration-700`}>
      {/* 0. THEATRICAL CURTAIN REVEAL OVERLAY WITH LIVE TIMER */}
      <CurtainReveal
        isOpen={isCurtainOpen}
        onToggle={() => setIsCurtainOpen(!isCurtainOpen)}
      />

      {/* 1. HEADER */}
      <header className="h-14 sm:h-16 border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40 px-3.5 sm:px-8 flex items-center justify-between">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          {/* Left: Official 36Route Cutout Logo */}
          <div className="flex items-center">
            <BrandLogo size="sm" />
          </div>

          {/* Right Controls: Replay Curtain Reveal + Coming Soon Badge */}
          <div className="flex items-center gap-3">
            {/* Replay Curtain Button */}
            <button
              onClick={() => setIsCurtainOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-amber-50 hover:text-amber-800 border border-slate-200 hover:border-amber-300 rounded-xl transition-all duration-200 shadow-subtle active:scale-95"
              title="Close and replay curtain reveal animation"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
              <span>Replay Curtain Reveal</span>
            </button>

            {/* Coming Soon Status Badge */}
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Coming Soon
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-12 flex flex-col items-center justify-center space-y-10 sm:space-y-14">
        {/* 2. HERO — MAIN FOCUS WITH STAGE SPOTLIGHT */}
        <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-10 text-center max-w-3xl w-full mx-auto border border-slate-200/90 shadow-card bg-white">
          {/* Subtle Aerial Transportation Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
            style={{ backgroundImage: 'url("/hero-bg.png")' }}
          />
          {/* Light Overlay for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/80 to-white/95 backdrop-blur-[1px] pointer-events-none" />

          {/* Hero Content Layer */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 sm:space-y-5">
            {/* Official 36Route Emblem + Wordmark Brand Identity */}
            <div className="flex justify-center">
              <BrandLogo size="lg" />
            </div>

            {/* Small Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              SMART EMPLOYEE COMMUTE PLATFORM
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-6xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase">
              COMING SOON
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed font-normal px-1">
              36Route empowers organizations with intelligent corridor routing, real-time trip visibility, and unified fleet management — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto shadow-md px-7 py-3 text-xs sm:text-sm active:scale-98 transition-transform"
                icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
              >
                Get Priority Access
              </Button>

              <button
                onClick={() => setIsCurtainOpen(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors shadow-subtle"
              >
                <Play className="w-3.5 h-3.5 text-orange-500" />
                <span>Watch Reveal Again</span>
              </button>
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

          {/* Clean Horizontal Flow Visual */}
          <SingleHorizontalFlow />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8 sm:py-10 px-4 sm:px-8 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start mb-1">
              <BrandLogo size="sm" />
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
