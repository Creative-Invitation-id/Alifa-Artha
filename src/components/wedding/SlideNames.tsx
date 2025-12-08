import React from 'react';

interface SlideNamesProps {
  showContent: boolean;
}

export const SlideNames: React.FC<SlideNamesProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="text-center">
        {/* Names */}
        <h1 
          className="font-anatomical text-5xl text-primary opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          Alifa
        </h1>
        
        <span 
          className="font-vremya text-xl text-primary/70 block my-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          &
        </span>
        
        <h1 
          className="font-anatomical text-5xl text-primary opacity-0 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          Artha
        </h1>

        {/* Decorative line */}
        <div 
          className="my-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '900ms' }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto" />
        </div>

        {/* Date */}
        <p 
          className="font-vremya text-xl text-primary opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1200ms' }}
        >
          18 Juli 2026
        </p>
      </div>
    </div>
  );
};