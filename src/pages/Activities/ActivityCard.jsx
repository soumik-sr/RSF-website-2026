export default function ActivityCard({ activity, onClick }) {
  return (
    <div
      className="activity-card"
      style={{ backgroundImage: `url(${activity.image})` }}
      onClick={onClick}
    >
      <div className="activity-title">
        {activity.title}
      </div>

      <div className="activity-hover">
        <p className="activity-desc">{activity.shortDescription}</p>
        <span className="activity-date">{activity.date}</span>

        <div className="activity-tags">
          {activity.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <em className="activity-cta">Click for more details</em>
      </div>
    </div>
  );
}
