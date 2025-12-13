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
  // Start muted so autoplay is allowed by browsers
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Auto-play /muara.mp3 from a specific start second and loop by replaying from that second.
    const START_SECOND = 33;
    const src = "/muara.mp3";
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.loop = false;
    audio.muted = true;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch (e) {
        // Autoplay may be blocked
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
      // Play muted first
      await tryPlay();
    };

    const onEnded = () => {
      if (audio.duration && audio.duration > START_SECOND) {
        audio.currentTime = START_SECOND;
      } else {
        audio.currentTime = 0;
      }
      tryPlay();
    };

    // Listen for unmute event from Open Invitation button
    const handleUnmute = () => {
      setIsMuted(false);
    };

    window.addEventListener('unmuteAudio', handleUnmute);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    if (audio.readyState >= 1) {
      onLoaded();
    } else {
      audio.load();
    }

    return () => {
      window.removeEventListener('unmuteAudio', handleUnmute);
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
        {/* Mute/Unmute toggle - left side, slightly middle, transparent */}
        <button
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          onClick={() => setIsMuted((v) => !v)}
          className="fixed left-4 top-1/3 z-50 bg-primary/50 text-primary-foreground p-2 rounded-full backdrop-blur-sm hover:bg-primary/70 transition-all"
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
