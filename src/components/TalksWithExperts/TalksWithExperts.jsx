import "./TalkWithExperts.css";

export default function TalkWithExperts() {
  const talks = [
    {
      title: "Quantum Computing: The Next Frontier",
      dateTime: "12 Feb 2026 · 5:00 PM IST",
      description: "An introductory talk on the fundamentals and future of quantum computing.",
      image: "/talks/quantum.jpg",
      link: "https://www.instagram.com/"
    },
    {
      title: "AI in Scientific Research",
      dateTime: "18 Feb 2026 · 6:30 PM IST",
      description: "How artificial intelligence is transforming modern scientific discovery.",
      image: "/talks/ai.jpg",
      link: "https://www.instagram.com/"
    },
    {
      title: "Careers in Research & Academia",
      dateTime: "25 Feb 2026 · 4:00 PM IST",
      description: "Insights into research pathways, academia, and interdisciplinary science.",
      image: "/talks/research.jpg",
      link: "https://www.instagram.com/"
    },
    {
      title: "Careers in Research & Academia",
      dateTime: "25 Feb 2026 · 4:00 PM IST",
      description: "Insights into research pathways, academia, and interdisciplinary science.",
      image: "/talks/research.jpg",
      link: "https://www.instagram.com/"
    }
  ];

  return (
    <section className="talks-section" id="talks">
      <h2 className="talks-title">Talks with Experts</h2>
      <p className="talks-subtitle">
        Engaging sessions with researchers and professionals across domains
      </p>

      <div className="talks-grid">
        {talks.map((talk, index) => (
          <a
            key={index}
            href={talk.link}
            target="_blank"
            rel="noopener noreferrer"
            className="talk-card"
          >
            <img
              src={talk.image}
              alt={talk.title}
              className="talk-image"
            />

            <div className="talk-content">
              <h3 className="talk-title">{talk.title}</h3>
              <p className="talk-datetime">{talk.dateTime}</p>
              <p className="talk-description">{talk.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
