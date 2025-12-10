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
    }, 800);

    // Call onComplete after animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none">
      {/* Top cover */}
      <div 
        className={`absolute left-0 top-0 w-full h-1/2 transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          animating ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <img
          src="/cover-top.svg"
          alt="cover top"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom cover */}
      <div 
        className={`absolute left-0 bottom-0 w-full h-1/2 transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
