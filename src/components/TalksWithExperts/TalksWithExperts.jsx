import "./TalkWithExperts.css";

export default function TalkWithExperts() {
  const talks = [
    {
      title: "Know the Nobel Laureates,2025",
      dateTime: "29th Oct 2025 · 3.45 pm IST",
      description: "Selected panel of experts from IIT Delhi and beyond will deliberate on the scientific contributions, impact, and future directions emerging from this year’s Nobel-recognised work.",
      image: "/eventsec5.jpeg",
      link: "https://www.instagram.com/rsf_iitdelhi/?hl=en"
    },
    {
      title: "Career path for PHD Graduates",
      dateTime: "23 Nov 2023 · 4:00 PM IST",
      description: "This talk explores the evolving landscape of postgraduate career choices, challenging the conventional route to academia.",
      image: "/talks1.png",
      link: "https://www.instagram.com/p/Cz_U68iLq2d/?hl=en&img_index=1"
    },
    {
      title: "Research Blitz",
      dateTime: "1 Nov 2023 · 4:00 PM IST",
      description: "Master research communication in a time limit without slides. Refine complex ideas for diverse audiences",
      image: "/talk3.png",
      link: "https://www.instagram.com/p/Cyk4IT6oY52/?hl=en"
    },
    {
      title: "Integrating Science and Strategy",
      dateTime: "19 Mar 2024 · 4:30 PM IST",
      description: "Pathways from Academia to Industry Leadership in Healthcare by Dr. Vasundhara Shukla.",
      image: "/talk2.png",
      link: "https://www.instagram.com/p/C4pr1XboCxo/?hl=en"
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
