import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const close = () => setSelected(null);

  const next = () => {
    if (selected === null) return;

    setSelected((selected + 1) % images.length);
  };

  const previous = () => {
    if (selected === null) return;

    setSelected(
      (selected - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      switch (e.key) {
        case "Escape":
          close();
          break;

        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          previous();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [selected]);

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) next();
    if (distance < -50) previous();
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.slice(0, 5).map((image, index) => (
          <button
            key={image}
            onClick={() => setSelected(index)}
            className="group overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt=""
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
        <div 
            className="aspect-square cursor-pointer rounded-xl w-full object-cover transition duration-300 group-hover:scale-105 
                bg-[radial-gradient(circle,rgba(154,160,166,1)_0%,rgba(56,79,97,0.7)_71%,rgba(169,182,219,0.1)_100%)] flex justify-center items-center"
            onClick={() => setSelected(5)}
        >
            <h2 className="font-bold text-white text-6xl"> +{images.slice(4, images.length - 1).length} </h2>
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="mx-4 max-h-[90vh] max-w-[90vw]"
          >
            <img
              src={images[selected]}
              alt=""
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 text-sm text-white/70">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}