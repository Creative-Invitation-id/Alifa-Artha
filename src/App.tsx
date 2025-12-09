import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Volume2, VolumeX } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Start muted so autoplay is allowed by browsers, then attempt to unmute programmatically.
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Auto-play /muara.mp3 from a specific start second and loop by replaying from that second.
    const START_SECOND = 55; // change this value to start from a different second
    const src = "/muara.mp3";
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.loop = false; // we'll manually rewind and replay
    // start muted to satisfy autoplay policies
    audio.muted = true;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch (e) {
        // Autoplay may be blocked by the browser until user interaction.
      }
    };

    const onLoaded = async () => {
      if (audio.duration && audio.duration > START_SECOND) {
        try {
          audio.currentTime = START_SECOND;
        } catch (e) {
          // ignore
        }
      } else {
        audio.currentTime = 0;
      }
      // First play muted (most browsers allow this)
      await tryPlay();

      // Then try to unmute programmatically — may still be blocked by some browsers
      try {
        audio.muted = false;
        await audio.play();
        setIsMuted(false);
      } catch (err) {
        // If unmute is blocked, keep muted and reflect that in UI
        audio.muted = true;
        setIsMuted(true);
      }
    };

    const onEnded = () => {
      if (audio.duration && audio.duration > START_SECOND) {
        audio.currentTime = START_SECOND;
      } else {
        audio.currentTime = 0;
      }
      tryPlay();
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    if (audio.readyState >= 1) {
      // If metadata already available, call handler (it may be async)
      onLoaded();
    } else {
      audio.load();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // sync mute state to audio element
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = isMuted;
    if (!isMuted) {
      a.play().catch(() => {});
    }
  }, [isMuted]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Mute/Unmute toggle */}
        <button
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          onClick={() => setIsMuted((v) => !v)}
          className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
