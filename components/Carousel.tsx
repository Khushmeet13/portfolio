'use client';

import Image from 'next/image';

export default function Carousel({
  images,
  current,
}: {
  images: string[];
  current: number;
  setCurrent: (index: number) => void;
}) {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        fill
        className="object-contain rounded-lg"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
