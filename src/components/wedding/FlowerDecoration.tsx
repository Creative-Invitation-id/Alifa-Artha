import React, { useRef, useEffect, useState } from 'react';

interface FlowerDecorationProps {
  /** called when the frame's top animation finishes (frame ready) */
  onFrameReady?: () => void;
  /** trigger curtain close animation */
  triggerCurtainClose?: boolean;
}

export const FlowerDecoration: React.FC<FlowerDecorationProps> = ({ onFrameReady, triggerCurtainClose }) => {
  const calledRef = useRef(false);
  const [curtainState, setCurtainState] = useState<'idle' | 'closing' | 'opening'>('idle');

  useEffect(() => {
    // reset called flag when component mounts so animation can trigger again
    calledRef.current = false;
  }, []);

  useEffect(() => {
    // trigger curtain close when prop changes
    if (triggerCurtainClose) {
      setCurtainState('closing');
    }
  }, [triggerCurtainClose]);

  const handleTopAnimEnd = () => {
    if (calledRef.current) return;
    calledRef.current = true;
    onFrameReady?.();
  };

  return (
    <>
      {/* Top frame - positioned at very top */}
      <div className="absolute left-0 top-0 w-full pointer-events-none z-[60] overflow-visible">
        <div className="flower-top w-full">
          <img
            src="/frame-top.png"
            alt="frame top"
            loading="eager"
            decoding="async"
            className={`w-full block animate-frame-enter object-cover frame-img animate-flower-pulse ${
              curtainState === 'closing' ? 'animate-flower-curtain-close' : curtainState === 'opening' ? 'animate-flower-curtain-open' : ''
            }`}
            onAnimationEnd={handleTopAnimEnd}
            style={{ height: '48%', objectFit: 'cover', animation: 'frame-enter 1.1s cubic-bezier(.2,.9,.3,1) both, flower-pulse 2.5s ease-in-out 1.1s infinite' }}
          />
        </div>
      </div>

      {/* Bottom frame - positioned at very bottom */}
      <div className="absolute left-0 bottom-0 w-full pointer-events-none z-[60] overflow-visible">
        <div className="flower-bottom w-full">
          <img
            src="/frame-bot.png"
            alt="frame bottom"
            loading="eager"
            decoding="async"
            className={`w-full block animate-frame-enter object-cover frame-img animate-flower-pulse-reverse ${
              curtainState === 'closing' ? 'animate-flower-curtain-close' : curtainState === 'opening' ? 'animate-flower-curtain-open' : ''
            }`}
            style={{ height: '48%', objectFit: 'cover', animation: 'frame-enter 1.1s cubic-bezier(.2,.9,.3,1) both 160ms, flower-pulse-reverse 2.5s ease-in-out 1.26s infinite' }}
          />
        </div>
      </div>
    </>
  );
};

export default FlowerDecoration;
