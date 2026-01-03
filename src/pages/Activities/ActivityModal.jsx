export default function ActivityModal({ activity, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <img src={activity.image} alt={activity.title} />

        <h2>{activity.title}</h2>
        <p className="modal-date">{activity.date}</p>

        <p className="modal-details">{activity.details}</p>

        {activity.links.length > 0 && (
          <div className="modal-links">
            {activity.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
