import React from 'react';
import { MapPin } from 'lucide-react';

interface SlideDetailsProps {
  showContent: boolean;
}

export const SlideDetails: React.FC<SlideDetailsProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-2">
      <div className="text-center space-y-3 w-full">
        {/* Groom */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <h2 className="font-script text-3xl text-primary">Artha Adi Wiratama</h2>
          <p className="font-serif-wedding text-xs text-primary/70 mt-1">
            Putra Bpk. Achmad Ilyas & Ibu Endang Purwati
          </p>
        </div>

        <span 
          className="font-serif-wedding text-lg text-primary/60 block opacity-0 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          &
        </span>

        {/* Bride */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <h2 className="font-script text-3xl text-primary">Alifa Nurhaeni</h2>
          <p className="font-serif-wedding text-xs text-primary/70 mt-1">
            Putri Bpk. Wanto & Ibu Heni Parwati
          </p>
        </div>

        {/* Date */}
        <div 
          className="pt-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-2" />
          <p className="font-serif-wedding text-base text-primary font-semibold">Sabtu, 18 Juli 2026</p>
        </div>

        {/* Akad */}
        <div 
          className="bg-wedding-cream/50 rounded-lg p-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '800ms' }}
        >
          <h3 className="font-serif-wedding text-sm font-semibold text-primary mb-1">Akad Pernikahan</h3>
          <p className="font-serif-wedding text-xs text-primary/80">08.00 - Selesai</p>
          <p className="font-serif-wedding text-xs text-primary/70 mt-1 leading-snug">
            Jl. Ikan Oscar No.19, Tambakrejo, Waru, Sidoarjo
          </p>
          <a
            href="https://maps.app.goo.gl/s9cm3vLJ5pSkMjqw9?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs mt-2 hover:bg-primary/90 transition-colors"
          >
            <MapPin size={12} />
            <span>Buka Maps</span>
          </a>
        </div>

        {/* Ramah Tamah */}
        <div 
          className="bg-wedding-cream/50 rounded-lg p-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1000ms' }}
        >
          <h3 className="font-serif-wedding text-sm font-semibold text-primary mb-1">Ramah Tamah</h3>
          <p className="font-serif-wedding text-xs text-primary/80">13.00 - Selesai</p>
          <p className="font-serif-wedding text-xs text-primary/70 mt-1 leading-snug">
            Jl. Ikan Gabus No. A42, Tambakrejo, Waru, Sidoarjo
          </p>
          <a
            href="https://maps.app.goo.gl/6mxjeoVhv7SXwoDk6?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs mt-2 hover:bg-primary/90 transition-colors"
          >
            <MapPin size={12} />
            <span>Buka Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};
