import Card from "../Card.jsx";
import "./EventsSection.css";

export default function EventsSection({ title, cards = [] }) {
  return (
    <section className="events-section">
      {title && <h1>{title}</h1>}

      <div className="cardSection">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            schedule={card.schedule}
          />
        ))}
      </div>
    </section>
  );
}

