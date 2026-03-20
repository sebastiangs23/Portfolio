"use client";

import { useEffect, useRef } from "react";
import "./sliderJob.css";

export default function SliderJob({ slides, type = "web" }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || !slides?.length) return;

    let raf = 0;
    let currentX = 0;
    let targetX = 0;

    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

    const updateTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const progress = clamp(-rect.top / scrollable, 0, 1);
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);

      targetX = -progress * maxTranslate;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;
      raf = requestAnimationFrame(animate);
    };

    const onScroll = () => updateTarget();
    const onResize = () => updateTarget();

    updateTarget();
    animate();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [slides]);

  if (!Array.isArray(slides) || slides.length === 0) return null;

  return (
    <section ref={sectionRef} className="slider-scroll-section">
      <div className="slider-scroll-sticky">
        <div className="slider-scroll-viewport">
          <div ref={trackRef} className="slider-scroll-track">
            {slides.map((s, index) => (
              <article className="slider-scroll-item" key={index}>
                <img
                  src={s.image}
                  alt={s.title || `slide-${index}`}
                  className={
                    type === "web"
                      ? "image-job-scroll"
                      : "screenshot-image-scroll"
                  }
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}