import { useRef } from "react";

export default function TimelineItem({
  children,
  isLeft,
  index,
  refIndex,
  showEmptyRight = true,
  setTimelineRef,
}) {
  return (
    <div
      ref={(el) => setTimelineRef?.(el, refIndex)}
      className="training__core-data-content-each timeline-item"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {isLeft ? (
        <div className="timeline-card">{children}</div>
      ) : (
        <div className="timeline-spacer" aria-hidden="true"></div>
      )}

      <div className="timeline-center">
        <span className="training__timeline-rounder"></span>
      </div>

      {!isLeft ? (
        <div className="timeline-card">{children}</div>
      ) : showEmptyRight ? (
        <div className="timeline-spacer" aria-hidden="true"></div>
      ) : null}
    </div>
  );
}