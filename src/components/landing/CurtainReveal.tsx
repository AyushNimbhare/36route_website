import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { CountdownTimer, LAUNCH_DATE_IST } from './CountdownTimer';
import { Volume2, VolumeX, ChevronRight, Play, Lock } from 'lucide-react';
import { useToast } from '../common/Toast';

interface CurtainRevealProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CurtainReveal: React.FC<CurtainRevealProps> = ({ isOpen, onToggle }) => {
  const { showToast } = useToast();
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Locked before 5th October 2026 IST; unlocked on/after 5th October 2026 IST
  const [isUnlocked, setIsUnlocked] = useState(() => new Date() >= LAUNCH_DATE_IST);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Web Audio API Theater Chime Sound
  const playTheaterSound = () => {
    if (isSoundMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Soft Sweep Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.2);
      masterGain.connect(ctx.destination);

      // Warm Theater Chime Frequencies (C4, E4, G4, C5)
      const freqs = [261.63, 329.63, 392.00, 523.25];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.1);
        oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 1.8);

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 2.0);
      });
    } catch {
      // Ignore audio policy errors
    }
  };

  const handleOpenClick = () => {
    if (!isUnlocked && new Date() < LAUNCH_DATE_IST) {
      showToast('36Route unveils on 5th October 2026 IST. Countdown in progress!', 'info');
      return;
    }
    playTheaterSound();
    onToggle();
  };

  const handleExpire = () => {
    setIsUnlocked(true);
    showToast('Official launch date reached! Click PULL CURTAINS TO ENTER to unveil 36Route.', 'success');
    playTheaterSound();
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden pointer-events-none transition-all duration-700 ${
        isOpen ? 'invisible delay-700' : 'visible'
      }`}
    >
      {/* Dark Stage Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-950/90 transition-opacity duration-1000 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Left Curtain Half - Full height seamless coverage */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 z-20 bg-cover bg-right transition-transform duration-1000 cubic-bezier(0.77, 0, 0.175, 1) pointer-events-auto shadow-2xl"
        style={{
          backgroundImage: 'url("/curtain.png")',
          transform: isOpen ? 'translateX(-100%) scaleX(0.25)' : 'translateX(0%) scaleX(1)',
          transformOrigin: 'left center',
        }}
      >
        {/* Shadow & Fabric Depth Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      {/* Right Curtain Half - Full height seamless coverage */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-20 bg-cover bg-left transition-transform duration-1000 cubic-bezier(0.77, 0, 0.175, 1) pointer-events-auto shadow-2xl"
        style={{
          backgroundImage: 'url("/curtain.png")',
          transform: isOpen ? 'translateX(100%) scaleX(0.25)' : 'translateX(0%) scaleX(1)',
          transformOrigin: 'right center',
        }}
      >
        {/* Shadow & Fabric Depth Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/50" />
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Subtle Stage Top Shadow Vignette */}
      <div
        className={`absolute top-0 inset-x-0 h-28 z-25 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-700 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Stage Spotlight Glow & Center Interactive Trigger */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-700 pointer-events-auto ${
          isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        {/* Radial Stage Spotlight */}
        <div className="absolute w-[320px] h-[320px] sm:w-[540px] sm:h-[540px] rounded-full bg-gradient-radial from-amber-200/20 via-orange-500/10 to-transparent blur-3xl pointer-events-none animate-pulse" />

        {/* Center Stage Card */}
        <div className="relative z-10 max-w-md sm:max-w-lg w-full my-auto bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center space-y-4 group">
          {/* 36Route Cutout Logo */}
          <div className="p-2 rounded-2xl bg-white/95 shadow-md border border-slate-200">
            <BrandLogo size="md" />
          </div>

          {/* Live Countdown Timer right on Curtain Reveal */}
          <div className="py-1">
            <CountdownTimer onExpire={handleExpire} />
          </div>

          {/* Title */}
          <div className="py-1">
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-black text-white tracking-wider uppercase">
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                COMING SOON
              </span>
            </h2>
          </div>

          {/* Main Action Button (Locked before 5 Oct 2026 IST, Unlocks on/after 5 Oct 2026 IST) */}
          <button
            onClick={handleOpenClick}
            className={`group/btn relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
              !isUnlocked
                ? 'bg-slate-900/90 text-amber-200 border border-amber-500/40 shadow-lg hover:border-amber-400 hover:bg-slate-900 active:scale-98'
                : 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95'
            }`}
          >
            {!isUnlocked ? (
              <>
                <Lock className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <span>LOCKED UNTIL 5TH OCT 2026</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-white shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
                <span>PULL CURTAINS TO ENTER</span>
                <ChevronRight className="w-5 h-5 text-amber-200 group-hover/btn:translate-x-1 transition-transform" />
              </>
            )}

            {/* Glowing border highlight */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
          </button>
        </div>

        {/* Audio Mute Toggle Button */}
        <button
          onClick={() => setIsSoundMuted(!isSoundMuted)}
          className="absolute top-6 right-6 z-40 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors"
          title={isSoundMuted ? 'Unmute theater audio' : 'Mute theater audio'}
        >
          {isSoundMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
        </button>
      </div>
    </div>
  );
};
