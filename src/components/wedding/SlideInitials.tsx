import React from "react";

interface SlideInitialsProps {
  showContent: boolean;
  isOpened?: boolean;
  onOpenInvitation?: () => void;
}

export const SlideInitials: React.FC<SlideInitialsProps> = ({ showContent, isOpened, onOpenInvitation }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-center flex flex-col items-center">

        {/* The Wedding Of */}
        <p className="font-vremya text-base text-primary/60 tracking-widest uppercase opacity-0 animate-fade-in-up mb-6">
          The Wedding Of
        </p>

        {/* Initials — larger and compact */}
        <div className="flex flex-col items-center overflow-visible -mt-2">
          <span className="font-anatomical text-9xl text-primary opacity-0 animate-fade-in-scale leading-none inline-block">
            A
          </span>

          <span className="font-vremya text-xl text-primary/70 opacity-0 animate-fade-in -my-4 inline-block animation-delay-300">
            &
          </span>

          <span className="font-anatomical text-9xl text-primary opacity-0 animate-fade-in-scale leading-none inline-block animation-delay-600">
            A
          </span>
        </div>

        {/* Decorative line */}
        <div className="mt-2 opacity-0 animate-fade-in animation-delay-900">
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </div>

        {/* Open Invitation Button - inside the same div */}
        {!isOpened && onOpenInvitation && (
          <button 
            onClick={onOpenInvitation} 
            className="mt-8 bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-all font-vremya tracking-wider text-xs uppercase opacity-0 animate-fade-in animation-delay-900"
          >
            Open Invitation
          </button>
        )}
      </div>
    </div>
  );
};
