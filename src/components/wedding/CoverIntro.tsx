import React, { useState, useEffect } from 'react';

interface CoverIntroProps {
  onComplete: () => void;
}

export const CoverIntro: React.FC<CoverIntroProps> = ({ onComplete }) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Start animation after 1s
    const startTimer = setTimeout(() => {
      setAnimating(true);
    }, 1000);

    // Complete after animation ends (4.8s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1000 + 4800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">

      {/* TOP COVER */}
      <div
        className={`
          absolute left-0 top-0 w-full h-full
          transition-transform duration-[4800ms]
          ease-[cubic-bezier(0.17,0.55,0.55,1)]
          ${animating ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <img
          src="/cover-top.svg"
          alt="cover top"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM COVER */}
      <div
        className={`
          absolute left-0 bottom-0 w-full h-full
          transition-transform duration-[4800ms]
          ease-[cubic-bezier(0.17,0.55,0.55,1)]
          ${animating ? 'translate-y-full' : 'translate-y-0'}
        `}
      >
        <img
          src="/cover-bot.svg"
          alt="cover bottom"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default CoverIntro;
