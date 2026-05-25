import { useEffect, useState } from "react";
import { BsMouse } from "react-icons/bs";
import "./ScrollHintModal.css";


export default function ScrollHintModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem("hasSeenScrollHint");

    if (!hasSeenHint) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenScrollHint", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl sm:max-w-md sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-2xl leading-none text-black-400 transition hover:text-gray-700"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black sm:h-20 sm:w-20">
          <div className="animate-scroll-down text-4xl text-white sm:text-5xl">
            <BsMouse />
          </div>
        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
          Keep scrolling
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
          There is more content below. Scroll down to continue exploring the
          timeline and sections.
        </p>

        <button
          type="button"
          onClick={handleClose}
          className="w-full rounded-xl hover-style_v2 hover-style_v2--normal px-5 py-3 text-sm  shadow-md transition sm:text-base"
        >
          Got it
        </button>
      </div>
    </div>
  );
}