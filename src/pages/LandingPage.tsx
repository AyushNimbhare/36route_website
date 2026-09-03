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
      {/* 1. THEATER STAGE BACKDROP WITH CLOSED CURTAINS */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none bg-slate-950">
        {/* Left Curtain Half - 52vw coverage with overlap */}
        <div
          className="absolute inset-y-0 -left-[1vw] w-[52vw] z-10 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: 'url("/curtain.png")',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-black/80 to-transparent" />
        </div>

        {/* Right Curtain Half - 52vw coverage with overlap */}
        <div
          className="absolute inset-y-0 -right-[1vw] w-[52vw] z-10 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: 'url("/curtain.png")',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/50" />
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        {/* Subtle Stage Top Shadow Vignette */}
        <div className="absolute top-0 inset-x-0 h-20 sm:h-28 z-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      </div>

      {/* 2. AUDIO MUTE / UNMUTE CONTROL (Top-Right) */}
      <button
        onClick={toggleSound}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors active:scale-90 touch-manipulation cursor-pointer"
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
      <div className="relative z-30 flex flex-col items-center justify-center p-3.5 sm:p-6 text-center max-w-full">
        {/* Radial Stage Spotlight Glow */}
        <div className="absolute w-[280px] h-[280px] sm:w-[540px] sm:h-[540px] rounded-full bg-gradient-radial from-amber-200/20 via-orange-500/10 to-transparent blur-2xl sm:blur-3xl pointer-events-none animate-pulse" />

        {/* Center Stage Card */}
        <div
          className="relative z-10 w-[94vw] max-w-md sm:max-w-lg bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col items-center justify-center space-y-4 sm:space-y-5 touch-manipulation"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 36Route Cutout Logo */}
          <div className="p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-white/95 shadow-md border border-slate-200">
            <BrandLogo size="md" />
          </div>

          {/* Live Countdown Timer */}
          <div className="py-1 w-full flex justify-center">
            <CountdownTimer />
          </div>

          {/* Title */}
          <div className="py-0.5">
            <h2 className="font-['Syne',sans-serif] text-xl sm:text-3xl font-black text-white tracking-wider uppercase">
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                COMING SOON
              </span>
            </h2>
          </div>

          {/* Locked Status Button */}
          <button
            onClick={handleLockedClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-10 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/90 text-amber-200 border border-amber-500/40 shadow-lg hover:border-amber-400 hover:bg-slate-900 transition-all duration-300 active:scale-95 touch-manipulation cursor-pointer"
          >
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 animate-pulse" />
            <span>LOCKED</span>
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/20 pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  );
};

