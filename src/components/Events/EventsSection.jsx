import { useEffect, useRef, useState } from "react";
import events from "./eventsData";
import "./Events.css";

export default function EventsSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);

  const next = () => setIndex((prev) => (prev + 1) % events.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + events.length) % events.length);

  /* Auto slide */
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  /* Swipe support */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="events-section">
      <h2 className="events-title">Events</h2>

      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {events.map((event, i) => {
          const offset = (i - index + events.length) % events.length;
          let className = "card";

          if (offset === 0) className += " active";
          else if (offset === 1 || offset === events.length - 1)
            className += " side";
          else className += " hidden";

          return (
            <a
              key={i}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              <img src={event.image} alt={event.title} />
              <div className="overlay">
                <h3>{event.title}</h3>
                <p>{event.subtitle}</p>
                <span>{event.date}</span>
              </div>
            </a>
          );
        })}

        <button className="nav left" onClick={prev}>←</button>
        <button className="nav right" onClick={next}>→</button>
      </div>
    </section>
  );
}
