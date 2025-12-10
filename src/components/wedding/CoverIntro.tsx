import React, { useState, useEffect } from 'react';

interface CoverIntroProps {
  onComplete: () => void;
}

export const CoverIntro: React.FC<CoverIntroProps> = ({ onComplete }) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Start animation after a brief moment
    const startTimer = setTimeout(() => {
      setAnimating(true);
    }, 1200);

    // Call onComplete after animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none">
      {/* Top cover - z-index lower */}
      <div 
        className={`absolute left-0 top-0 w-full h-1/2 z-[100] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          animating ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <img
          src="/cover-top.svg"
          alt="cover top"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom cover - z-index higher (on top) */}
      <div 
        className={`absolute left-0 bottom-0 w-full h-1/2 z-[101] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          animating ? 'translate-y-full' : 'translate-y-0'
        }`}
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
