import React from 'react';

export const FlowerDecoration = () => (
  <>
    {/* Top Left Flower */}
    <div className="absolute -top-2 -left-2 w-28 h-28 opacity-90">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="25" r="12" fill="hsl(var(--wedding-pink))" opacity="0.7"/>
        <circle cx="42" cy="20" r="12" fill="hsl(var(--wedding-coral))" opacity="0.7"/>
        <circle cx="38" cy="38" r="12" fill="hsl(var(--wedding-gold))" opacity="0.7"/>
        <circle cx="20" cy="42" r="12" fill="hsl(var(--wedding-pink))" opacity="0.8"/>
        <circle cx="30" cy="30" r="8" fill="hsl(var(--wedding-cream))" opacity="0.95"/>
        {/* Leaves */}
        <ellipse cx="55" cy="55" rx="15" ry="8" fill="hsl(140, 30%, 45%)" opacity="0.6" transform="rotate(-45 55 55)"/>
        <ellipse cx="60" cy="48" rx="12" ry="6" fill="hsl(140, 35%, 50%)" opacity="0.5" transform="rotate(-30 60 48)"/>
      </svg>
    </div>

    {/* Top Right Flower */}
    <div className="absolute -top-2 -right-2 w-28 h-28 opacity-90 transform scale-x-[-1]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="25" r="12" fill="hsl(var(--wedding-coral))" opacity="0.7"/>
        <circle cx="42" cy="20" r="12" fill="hsl(var(--wedding-pink))" opacity="0.7"/>
        <circle cx="38" cy="38" r="12" fill="hsl(var(--wedding-gold))" opacity="0.7"/>
        <circle cx="20" cy="42" r="12" fill="hsl(var(--wedding-pink))" opacity="0.8"/>
        <circle cx="30" cy="30" r="8" fill="hsl(var(--wedding-cream))" opacity="0.95"/>
        <ellipse cx="55" cy="55" rx="15" ry="8" fill="hsl(140, 30%, 45%)" opacity="0.6" transform="rotate(-45 55 55)"/>
        <ellipse cx="60" cy="48" rx="12" ry="6" fill="hsl(140, 35%, 50%)" opacity="0.5" transform="rotate(-30 60 48)"/>
      </svg>
    </div>

    {/* Bottom Left Flower */}
    <div className="absolute -bottom-2 -left-2 w-28 h-28 opacity-90 transform scale-y-[-1]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="25" r="12" fill="hsl(var(--wedding-gold))" opacity="0.7"/>
        <circle cx="42" cy="20" r="12" fill="hsl(var(--wedding-coral))" opacity="0.7"/>
        <circle cx="38" cy="38" r="12" fill="hsl(var(--wedding-pink))" opacity="0.7"/>
        <circle cx="20" cy="42" r="12" fill="hsl(var(--wedding-coral))" opacity="0.8"/>
        <circle cx="30" cy="30" r="8" fill="hsl(var(--wedding-cream))" opacity="0.95"/>
        <ellipse cx="55" cy="55" rx="15" ry="8" fill="hsl(140, 30%, 45%)" opacity="0.6" transform="rotate(-45 55 55)"/>
        <ellipse cx="60" cy="48" rx="12" ry="6" fill="hsl(140, 35%, 50%)" opacity="0.5" transform="rotate(-30 60 48)"/>
      </svg>
    </div>

    {/* Bottom Right Flower */}
    <div className="absolute -bottom-2 -right-2 w-28 h-28 opacity-90 transform scale-[-1]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="25" r="12" fill="hsl(var(--wedding-pink))" opacity="0.7"/>
        <circle cx="42" cy="20" r="12" fill="hsl(var(--wedding-gold))" opacity="0.7"/>
        <circle cx="38" cy="38" r="12" fill="hsl(var(--wedding-coral))" opacity="0.7"/>
        <circle cx="20" cy="42" r="12" fill="hsl(var(--wedding-pink))" opacity="0.8"/>
        <circle cx="30" cy="30" r="8" fill="hsl(var(--wedding-cream))" opacity="0.95"/>
        <ellipse cx="55" cy="55" rx="15" ry="8" fill="hsl(140, 30%, 45%)" opacity="0.6" transform="rotate(-45 55 55)"/>
        <ellipse cx="60" cy="48" rx="12" ry="6" fill="hsl(140, 35%, 50%)" opacity="0.5" transform="rotate(-30 60 48)"/>
      </svg>
    </div>
  </>
);
