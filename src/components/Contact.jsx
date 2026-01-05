import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Connect With Us</h1>

        <div className="contact-divider"></div>

        <p>
          Have questions, ideas, or are interested in collaborating with us?
          We welcome conversations that foster meaningful research and
          interdisciplinary exchange.
        </p>

        <a
          href="mailto:rsf_secretary@iitd.ac.in"
          className="contact-btn"
        >
          Email Research Synergy Forum
        </a>
      </div>
    </section>
  );
};

export default Contact;
