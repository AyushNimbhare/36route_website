import React, { useState, useEffect, useRef } from 'react';
import { soundEngine } from '../../utils/soundEffects';

// Official Launch Date: 5th October 2026 00:00:00 IST (India Standard Time UTC+05:30)
export const LAUNCH_DATE_IST = new Date('2026-10-05T00:00:00+05:30');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

interface CountdownTimerProps {
  targetDate?: Date;
  onExpire?: () => void;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = LAUNCH_DATE_IST,
  onExpire,
  className = '',
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      totalSeconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const prevSecondsRef = useRef<number>(timeLeft.totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      // Play continuous futuristic digital sound on every second
      if (remaining.totalSeconds > 0 && remaining.totalSeconds !== prevSecondsRef.current) {
        if (remaining.totalSeconds <= 10) {
          // Final 10 seconds anticipation build-up
          soundEngine.playCountdownTick(remaining.totalSeconds);
        } else {
          // Continuous subtle futuristic second tick
          soundEngine.playRegularSecondTick(remaining.seconds);
        }
      }
      prevSecondsRef.current = remaining.totalSeconds;

      if (remaining.totalSeconds <= 0 && prevSecondsRef.current > 0) {
        if (onExpire) onExpire();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-1 sm:gap-2.5 max-w-full select-none ${className}`}>
      {timeBlocks.map((block, idx) => (
        <React.Fragment key={block.label}>
          <div className="flex flex-col items-center">
            {/* Mobile-optimized futuristic Zen Dots timer card */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-slate-900/90 border border-slate-800 shadow-subtle flex items-center justify-center overflow-hidden">
              <span className="font-['Zen_Dots',cursive] text-sm sm:text-xl font-normal tracking-wide text-white">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>

            {/* Label */}
            <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
              {block.label}
            </span>
          </div>

          {/* Colon Separator */}
          {idx < timeBlocks.length - 1 && (
            <div className="flex items-center justify-center pb-3.5 sm:pb-4 text-slate-500 font-['Zen_Dots',cursive] text-xs sm:text-base opacity-75">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
