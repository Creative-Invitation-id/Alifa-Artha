import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FlowerDecoration } from './FlowerDecoration';
import { SlideInitials } from './SlideInitials';
import { SlideNames } from './SlideNames';
import { SlideInvitation } from './SlideInvitation';
import { SlideDetails } from './SlideDetails';
import { SlideClosing } from './SlideClosing';

const TOTAL_SLIDES = 5;

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasViewedAll, setHasViewedAll] = useState(false);
  const [viewedSlides, setViewedSlides] = useState(new Set([0]));

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    setViewedSlides(prev => new Set([...prev, currentSlide]));

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    // Auto advance for first slides
    if (currentSlide === 0) {
      const autoTimer = setTimeout(() => {
        setCurrentSlide(1);
      }, 4000);
      return () => clearTimeout(autoTimer);
    } else if (currentSlide < TOTAL_SLIDES - 1) {
      const autoTimer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
      }, 5000);
      return () => clearTimeout(autoTimer);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (viewedSlides.size === TOTAL_SLIDES) {
      setHasViewedAll(true);
    }
  }, [viewedSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Slide indicators
  const SlideIndicators = () => (
    <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-20">
      {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            idx === currentSlide 
              ? 'bg-primary w-6' 
              : 'bg-primary/30 hover:bg-primary/50'
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-muted flex items-center justify-center p-4">
      {/* Phone container */}
      <div className="phone-container rounded-3xl shadow-2xl border border-border/50 relative">
        <FlowerDecoration />
        
        {/* Content area */}
        <div className="relative z-10 h-full">
          {currentSlide === 0 && <SlideInitials showContent={showContent} />}
          {currentSlide === 1 && <SlideNames showContent={showContent} />}
          {currentSlide === 2 && <SlideInvitation showContent={showContent} />}
          {currentSlide === 3 && <SlideDetails showContent={showContent} />}
          {currentSlide === 4 && <SlideClosing showContent={showContent} />}
        </div>

        {/* Slide indicators */}
        <SlideIndicators />

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4 z-20">
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {currentSlide < TOTAL_SLIDES - 1 && (
            <button
              onClick={nextSlide}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
