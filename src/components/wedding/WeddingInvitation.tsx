import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FlowerDecoration } from "./FlowerDecoration";
import { SlideInitials } from "./SlideInitials";
import { SlideInvitation } from "./SlideInvitation";
import { SlideDetails } from "./SlideDetails";
import { SlideClosing } from "./SlideClosing";

const TOTAL_SLIDES = 4;

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const [frameReady, setFrameReady] = useState(false);
  const [hasViewedAll, setHasViewedAll] = useState(false);
  const [viewedSlides, setViewedSlides] = useState(new Set([0]));
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // when slide changes, hide content and remount frame so its animation replays
    setShowContent(false);
    setFrameReady(false);
    setFrameKey((k) => k + 1);

    // For slide 0, wait for frame. For other slides, show content immediately
    if (currentSlide !== 0) {
      setFrameReady(true);
    }

    setViewedSlides((prev) => new Set([...prev, currentSlide]));
  }, [currentSlide]);

  // once frame reports ready, show content shortly after
  useEffect(() => {
    if (!frameReady) return;

    // For slide 0, add delay for frame animation. For others, show immediately.
    const delay = currentSlide === 0 ? 150 : 0;
    const t = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(t);
  }, [frameReady, currentSlide]);

  useEffect(() => {
    if (viewedSlides.size === TOTAL_SLIDES) {
      setHasViewedAll(true);
    }
  }, [viewedSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const handleOpenInvitation = useCallback(() => {
    setIsOpened(true);
    setCurrentSlide(1); // Navigate to slide 2
    // Dispatch custom event to unmute audio
    window.dispatchEvent(new CustomEvent("unmuteAudio"));
  }, []);

  // Slide indicators (only show when opened and not on first slide)
  const SlideIndicators = () => {
    if (!isOpened) return null;
    return (
      <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-1.5 z-30">
        {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="phone-wrapper">
      {/* Phone container */}
      <div className="phone-container relative">
        {/* Flower decorations - different for SlideDetails */}
        {currentSlide === 2 ? (
          <>
            {/* Top-left corner frame for SlideDetails (left-top.webp) -> Floating ke Atas */}
            <div className="absolute left-0 top-0 w-[40%] pointer-events-none z-[60]">
              <img
                src="/left-top.png"
                alt="frame top left"
                loading="eager"
                // MENGGUNAKAN float-up
                className="w-full block animate-frame-enter animate-float-up"
                style={{ animation: 'frame-enter 1.1s cubic-bezier(.2,.9,.3,1) both, float-up 3s ease-in-out infinite' }}
              />
            </div>
            {/* Bottom-right corner frame for SlideDetails (right-bot.webp) -> Floating ke Bawah */}
            <div className="absolute right-0 bottom-0 w-[40%] pointer-events-none z-[60]">
              <img
                src="/right-bot.png"
                alt="frame bottom right"
                loading="eager"
                // MENGGUNAKAN float-down
                className="w-full block animate-frame-enter animate-float-down"
                style={{ animation: 'frame-enter 1.1s cubic-bezier(.2,.9,.3,1) both 160ms, float-down 3s ease-in-out infinite 160ms' }}
              />
            </div>
          </>
        ) : (
          // Asumsi FlowerDecoration menggunakan float-up atau float-down sesuai dengan posisinya
          <FlowerDecoration key={frameKey} onFrameReady={() => setFrameReady(true)} />
        )}

        {/* Content area */}
        <div className={`relative z-10 h-full ${showContent ? "animate-slide-in" : ""}`}>
          {currentSlide === 0 && <SlideInitials showContent={showContent} isOpened={isOpened} onOpenInvitation={handleOpenInvitation} />}
          {currentSlide === 1 && <SlideInvitation showContent={showContent} />}
          {currentSlide === 2 && <SlideDetails showContent={showContent} />}
          {currentSlide === 3 && <SlideClosing showContent={showContent} />}
        </div>

        {/* Slide indicators */}
        <SlideIndicators />

        {/* Navigation Buttons - only show when opened */}
        {isOpened && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 px-4 z-20">
            {currentSlide > 0 && (
              <button onClick={prevSlide} className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all shadow-lg" aria-label="Previous slide">
                <ChevronLeft size={20} />
              </button>
            )}

            {currentSlide < TOTAL_SLIDES - 1 && (
              <button onClick={nextSlide} className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all shadow-lg" aria-label="Next slide">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingInvitation;