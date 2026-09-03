import React, { useState, useEffect } from 'react';

// Official Launch Date: 5th October 2026 00:00:00 IST (India Standard Time UTC+05:30)
export const LAUNCH_DATE_IST = new Date('2026-10-05T00:00:00+05:30');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
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
    <div className={`flex items-center justify-center gap-2 sm:gap-3 select-none ${className}`}>
      {timeBlocks.map((block, idx) => (
        <React.Fragment key={block.label}>
          <div className="flex flex-col items-center">
            {/* Unique Futuristic Zen Dots Timer Card */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-slate-900/90 border border-slate-800 shadow-subtle flex items-center justify-center overflow-hidden">
              <span className="font-['Zen_Dots',cursive] text-lg sm:text-2xl font-normal tracking-wide text-white">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>

            {/* Label */}
            <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {block.label}
            </span>
          </div>

          {/* Colon Separator */}
          {idx < timeBlocks.length - 1 && (
            <div className="flex items-center justify-center pb-5 text-slate-500 font-['Zen_Dots',cursive] text-base sm:text-xl opacity-75">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
