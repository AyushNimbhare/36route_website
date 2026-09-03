import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../components/common/BrandLogo';
import { CountdownTimer } from '../components/landing/CountdownTimer';
import { Volume2, VolumeX, Lock } from 'lucide-react';
import { useToast } from '../components/common/Toast';
import { soundEngine } from '../utils/soundEffects';

export const LandingPage: React.FC = () => {
  const { showToast } = useToast();
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  useEffect(() => {
    // Keep viewport clean and non-scrollable
    document.documentElement.classList.add('curtain-locked');
    document.body.classList.add('curtain-locked');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.classList.remove('curtain-locked');
      document.body.classList.remove('curtain-locked');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    soundEngine.setMuted(isSoundMuted);
  }, [isSoundMuted]);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextMuted = !isSoundMuted;
    setIsSoundMuted(nextMuted);
    soundEngine.setMuted(nextMuted);
    if (!nextMuted) {
      soundEngine.playPreviewSound();
      showToast('Sound effects enabled', 'info');
    } else {
      showToast('Sound effects muted', 'info');
    }
  };

  const handleLockedClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    showToast('36Route unveils on 5th October 2026 IST. Countdown in progress!', 'info');
    soundEngine.playCountdownTick(1);
  };

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen min-h-[100dvh] overflow-hidden bg-slate-950 text-slate-900 select-none flex items-center justify-center">
      {/* 1. SINGLE UNIFIED THEATER STAGE BACKDROP (No split seam, authentic ratio on mobile & desktop) */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url("/curtain.png")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle Vignette overlay for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      </div>

      {/* 2. AUDIO MUTE / UNMUTE CONTROL (Top-Right with Safe-Area Inset) */}
      <button
        onClick={toggleSound}
        className="fixed top-safe right-safe z-40 p-2.5 sm:p-3 rounded-full bg-slate-900/85 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors active:scale-90 touch-manipulation cursor-pointer shadow-lg"
        title={isSoundMuted ? 'Unmute theater audio' : 'Mute theater audio'}
        aria-label={isSoundMuted ? 'Unmute theater audio' : 'Mute theater audio'}
      >
        {isSoundMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
        )}
      </button>

      {/* 3. CENTER STAGE SPOTLIGHT & FLOATING COMING SOON CARD */}
      <div className="relative z-30 flex flex-col items-center justify-center p-3 text-center max-w-full my-auto">
        {/* Radial Stage Spotlight Glow */}
        <div className="absolute w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-radial from-amber-200/20 via-orange-500/10 to-transparent blur-2xl sm:blur-3xl pointer-events-none animate-pulse" />

        {/* Center Stage Card (Proportionally optimized for all mobile screen ratios) */}
        <div
          className="relative z-10 w-[88vw] max-w-[340px] sm:max-w-md bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col items-center justify-center space-y-3 sm:space-y-4 touch-manipulation"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 36Route Cutout Logo */}
          <div className="p-1 sm:p-1.5 rounded-xl bg-white/95 shadow-md border border-slate-200">
            <BrandLogo size="md" />
          </div>

          {/* Live Countdown Timer */}
          <div className="py-0.5 w-full flex justify-center">
            <CountdownTimer />
          </div>

          {/* Title */}
          <div className="py-0.5">
            <h2 className="font-['Syne',sans-serif] text-lg sm:text-2xl font-black text-white tracking-wider uppercase">
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                COMING SOON
              </span>
            </h2>
          </div>

          {/* Locked Status Button (Centered pill on both mobile & desktop) */}
          <button
            onClick={handleLockedClick}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/90 text-amber-200 border border-amber-500/40 shadow-lg hover:border-amber-400 hover:bg-slate-900 transition-all duration-300 active:scale-95 touch-manipulation cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 animate-pulse" />
            <span>LOCKED</span>
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/20 pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  );
};

