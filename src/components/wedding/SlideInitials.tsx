import React from 'react';

interface SlideInitialsProps {
  showContent: boolean;
}

export const SlideInitials: React.FC<SlideInitialsProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="text-center">
        {/* Initials with staggered animation */}
        <div className="flex flex-col items-center gap-0">
          <span 
            className="font-script text-7xl text-primary opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '0ms' }}
          >
            A
          </span>
          <span 
            className="font-serif-wedding text-2xl text-primary/70 opacity-0 animate-fade-in -my-2"
            style={{ animationDelay: '300ms' }}
          >
            &
          </span>
          <span 
            className="font-script text-7xl text-primary opacity-0 animate-fade-in-scale"
            style={{ animationDelay: '600ms' }}
          >
            A
          </span>
        </div>
        
        {/* Decorative line */}
        <div 
          className="mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '900ms' }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </div>

        {/* Subtitle */}
        <p 
          className="font-serif-wedding text-sm text-primary/60 mt-4 tracking-widest uppercase opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1200ms' }}
        >
          The Wedding
        </p>
      </div>
    </div>
  );
};
