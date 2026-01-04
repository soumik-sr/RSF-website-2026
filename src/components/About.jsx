import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* TEXT */}
        <div className="about-text">
          <h1>About Research Synergy Forum</h1>

          <div className="about-divider"></div>

          <p>
            The <strong>Research Synergy Forum (RSF)</strong> at IIT Delhi is a
            collective platform dedicated to fostering collaboration and
            knowledge exchange among research scholars across disciplines.
          </p>

          <p>
            RSF organizes seminars, workshops, expert talks, and academic
            discussions aimed at strengthening interdisciplinary research and
            promoting academic excellence. Through these initiatives, RSF
            enables scholars to connect, share ideas, and build a vibrant and
            inclusive research community.
          </p>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img src="/IITD.png" alt="IIT Delhi Campus" />
        </div>

      </div>
    </section>
  );
};

export default About;

