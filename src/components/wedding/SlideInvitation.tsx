import React from 'react';

interface SlideInvitationProps {
  showContent: boolean;
}

export const SlideInvitation: React.FC<SlideInvitationProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-5">
      <div className="text-center space-y-4">
        {/* Bismillah */}
        <div 
          className="font-arabic text-2xl text-primary opacity-0 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>

        {/* Salam */}
        <p 
          className="font-vremya text-lg text-primary opacity-0 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Assalamualaikum Wr. Wb.
        </p>

        {/* Decorative line */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto" />
        </div>

        {/* Message */}
        <p 
          className="font-vremya text-sm text-primary/80 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '700ms' }}
        >
          Dengan penuh suka cita,<br />
          kami mengundang Bapak/Ibu/Saudara/i<br />
          untuk hadir dan memberikan doa restu<br />
          dalam akad pernikahan kami.
        </p>

        <p 
          className="font-vremya text-sm text-primary/80 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1000ms' }}
        >
          Kehadiran serta doa dari anda<br />
          akan menjadi anugerah yang begitu berharga<br />
          bagi kami dalam memulai perjalanan baru.
        </p>
      </div>
    </div>
  );
};