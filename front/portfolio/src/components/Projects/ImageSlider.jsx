import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const ImageSlider = ({
  slides = [],
  type = "web",
  autoPlay = true,
  interval = 3500,
  title = "Project preview",
}) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = slides.length;

  const isPhone = type === "phone";

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!Array.isArray(slides) || slides.length <= 1) return;

    const nextImageIndex = (current + 1) % length;
    const preloadImg = new Image();
    preloadImg.src = slides[nextImageIndex]?.image;
  }, [current, slides, length]);

  useEffect(() => {
    if (!autoPlay || isPaused || length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, length]);

  const currentSlide = useMemo(() => slides[current], [slides, current]);

  if (!Array.isArray(slides) || slides.length === 0) return null;

  return (
    <div
      className={`group relative mx-auto w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm ${
        isPhone
          ? "max-w-[280px] sm:max-w-[320px]"
          : "max-w-full"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={title}
    >
      <div
        className={`relative ${
          isPhone
            ? "aspect-[9/19] p-2 sm:p-3"
            : "aspect-[16/10] p-2 sm:p-3 md:p-4"
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={currentSlide.image}
              alt={`${title} ${current + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-full w-full object-cover"
              loading="eager"
              draggable={false}
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        </div>

        {length > 1 && (
          <>
            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/70 sm:left-5"
            >
              <FaChevronLeft className="text-sm sm:text-base" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/70 sm:right-5"
            >
              <FaChevronRight className="text-sm sm:text-base" />
            </button>
          </>
        )}
      </div>

      {length > 1 && (
        <div className="flex items-center justify-center gap-2 px-4 pb-4 pt-1 sm:pb-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};