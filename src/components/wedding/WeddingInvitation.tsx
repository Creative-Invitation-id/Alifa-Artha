import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FlowerDecoration } from "./FlowerDecoration";
import { CoverIntro } from "./CoverIntro";
import { SlideInitials } from "./SlideInitials";
import { SlideNames } from "./SlideNames";
import { SlideInvitation } from "./SlideInvitation";
import { SlideDetails } from "./SlideDetails";
import { SlideClosing } from "./SlideClosing";

const TOTAL_SLIDES = 5;

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const [frameReady, setFrameReady] = useState(false);
  const [hasViewedAll, setHasViewedAll] = useState(false);
  const [viewedSlides, setViewedSlides] = useState(new Set([0]));
  const [showCover, setShowCover] = useState(true);

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

  const handleCoverComplete = useCallback(() => {
    setShowCover(false);
  }, []);

  // Slide indicators
  const SlideIndicators = () => (
    <div className="absolute bottom-22 left-0 right-0 flex justify-center gap-1.5 z-30">
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

  // Corner flowers for slide 2 (top-left and bottom-right)
  const Slide2Flowers = () => (
    <>
      <div className="absolute left-0 top-0 w-1/2 pointer-events-none z-20 overflow-visible animate-frame-corner-in">
        <div className="animate-corner-pulse-tl">
          <img
            src="/top-l.svg"
            alt="frame top-left"
            loading="eager"
            decoding="async"
            className="w-full block object-cover frame-img"
            style={{ height: '30%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 pointer-events-none z-20 overflow-visible animate-frame-corner-in">
        <div className="animate-corner-pulse-br">
          <img
            src="/bot-r.svg"
            alt="frame bottom-right"
            loading="eager"
            decoding="async"
            className="w-full block object-cover frame-img"
            style={{ height: '30%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );

  // Corner flowers for slide 3 (top-right and bottom-left)
  const Slide3Flowers = () => (
    <>
      <div className="absolute right-0 top-0 w-1/2 pointer-events-none z-20 overflow-visible animate-frame-corner-in">
        <div className="animate-corner-pulse-tr">
          <img
            src="/top-r.svg"
            alt="frame top-right"
            loading="eager"
            decoding="async"
            className="w-full block object-cover frame-img"
            style={{ height: '30%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-1/2 pointer-events-none z-20 overflow-visible animate-frame-corner-in">
        <div className="animate-corner-pulse-bl">
          <img
            src="/bot-l.svg"
            alt="frame bottom-left"
            loading="eager"
            decoding="async"
            className="w-full block object-cover frame-img"
            style={{ height: '30%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="phone-wrapper">
      {/* Phone container */}
      <div className="phone-container relative">
        {/* Cover intro */}
        {showCover && <CoverIntro onComplete={handleCoverComplete} />}

        {/* Flower decorations based on slide */}
        {currentSlide === 0 && (
          <FlowerDecoration key={frameKey} onFrameReady={() => setFrameReady(true)} />
        )}
        {currentSlide === 1 && <Slide2Flowers />}
        {currentSlide === 2 && <Slide3Flowers />}
        {(currentSlide === 3 || currentSlide === 4) && (
          <FlowerDecoration key={`frame-${currentSlide}-${frameKey}`} onFrameReady={() => setFrameReady(true)} />
        )}

        {/* Content area */}
        <div className={`relative z-10 h-full ${showContent ? 'animate-slide-in' : ''}`}>
          {currentSlide === 0 && <SlideInitials showContent={showContent} />}
          {currentSlide === 1 && <SlideNames showContent={showContent} />}
          {currentSlide === 2 && <SlideInvitation showContent={showContent} />}
          {currentSlide === 3 && <SlideDetails showContent={showContent} />}
          {currentSlide === 4 && <SlideClosing showContent={showContent} />}
        </div>

        {/* Slide indicators */}
        <SlideIndicators />

        {/* Navigation Buttons */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 px-4 z-20">
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
      </div>
    </div>
  );
};

export default WeddingInvitation;
