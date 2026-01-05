import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-text fade-in">
          <h1>
            Advancing Research Through
            <span> Collaboration & Innovation</span>
          </h1>

          <p>
            Research Synergy Forum connects ideas, disciplines,
            and people to create meaningful scientific impact.
          </p>

          <a href="#about-togo" className="hero-btn">
            Explore
          </a>
        </div>

        <div className="hero-visual fade-in-delay">
          <div className="wave"></div>
          <div className="wave second"></div>
        </div>

      </div>
    </section>
  );
}
