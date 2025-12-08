import React from 'react';

interface SlideClosingProps {
  showContent: boolean;
}

export const SlideClosing: React.FC<SlideClosingProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-5">
      <div className="text-center space-y-4">
        {/* Initials */}
        <div className="flex flex-col items-center gap-0 opacity-0 animate-fade-in-scale">
          <span className="font-script text-5xl text-primary">A</span>
          <span className="font-serif-wedding text-lg text-primary/70 -my-1">&</span>
          <span className="font-script text-5xl text-primary">A</span>
        </div>

        {/* Names */}
        <h2 
          className="font-script text-3xl text-primary opacity-0 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Alifa & Artha
        </h2>

        {/* Quote */}
        <div 
          className="space-y-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto" />
          
          <p className="font-serif-wedding text-xs text-primary/80 leading-relaxed italic px-2">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <p className="font-serif-wedding text-xs text-primary font-semibold">(QS. Ar-Rum: 21)</p>
        </div>

        {/* Doa */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '900ms' }}
        >
          <p className="font-serif-wedding text-xs text-primary/80 leading-relaxed italic px-2">
            "Ya Allah, berkahilah pernikahan kami, limpahkan berkah kepada kami, dan kumpulkanlah kami berdua dalam kebaikan."
          </p>
        </div>

        {/* Wassalam */}
        <p 
          className="font-serif-wedding text-sm text-primary opacity-0 animate-fade-in"
          style={{ animationDelay: '1200ms' }}
        >
          Wassalamualaikum Wr. Wb.
        </p>
      </div>
    </div>
  );
};
