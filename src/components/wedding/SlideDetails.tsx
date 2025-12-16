import React from 'react';
import { MapPin } from 'lucide-react';

interface SlideDetailsProps {
  showContent: boolean;
}

export const SlideDetails: React.FC<SlideDetailsProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-3 py-1">
      <div className="text-center space-y-1.5 w-full">
        {/* Groom */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <h2 className="font-anatomical text-4xl text-primary">Artha Adi Wiratama</h2>
          <p className="font-vremya text-[10px] text-primary/70 mt-0.5">
            Putra Bpk. Achmad Ilyas & Ibu Endang Purwati
          </p>
        </div>

        <span 
          className="font-vremya text-sm text-primary/60 block opacity-0 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          &
        </span>

        {/* Bride */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <h2 className="font-anatomical text-4xl text-primary">Alifa Nurhaeni</h2>
          <p className="font-vremya text-[10px] text-primary/70 mt-0.5">
            Putri Bpk. Wanto & Ibu Heni Parwati
          </p>
        </div>

        {/* Date */}
        <div 
          className="pt-1 opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-1" />
          <p className="font-vremya text-[15px] text-primary font-semibold">Sabtu, 18 Juli 2026</p>
        </div>

        {/* Akad */}
        <div 
          className="rounded-lg p-1.5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '800ms' }}
        >
          <h3 className="font-vremya text-sm font-semibold text-primary mb-0.5">Akad Pernikahan</h3>
          <p className="font-vremya text-[15px] text-primary/80">08.00 - Selesai</p>
          <p className="font-vremya text-[15px] text-primary/80">Masjid Al-Ukhuwah</p>
          <p className="font-vremya text-[14px] text-primary/70 mt-0.5 leading-tight">
            Jl. Ikan Oscar No.19, Tambakrejo, Waru, Sidoarjo
          </p>
          <a
            href="https://maps.app.goo.gl/s9cm3vLJ5pSkMjqw9?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-[9px] mt-1 hover:bg-primary/90 transition-colors font-vremya"
          >
            <MapPin size={10} />
            <span>Buka Maps</span>
          </a>
        </div>

        {/* Ramah Tamah */}
        <div 
          className="rounded-lg p-1.5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1000ms' }}
        >
          <h3 className="font-vremya text-sm font-semibold text-primary mb-0.5">Ramah Tamah</h3>
          <p className="font-vremya text-[15px] text-primary/80">13.00 - Selesai</p>
          <p className="font-vremya text-[14px] text-primary/70 mt-0.5 leading-tight">
            Jl. Ikan Gabus No. A42, Tambakrejo, Waru, Sidoarjo
          </p>
          <a
            href="https://maps.app.goo.gl/6mxjeoVhv7SXwoDk6?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-[9px] mt-1 hover:bg-primary/90 transition-colors font-vremya"
          >
            <MapPin size={10} />
            <span>Buka Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};