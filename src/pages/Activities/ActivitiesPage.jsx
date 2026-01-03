import { useState } from "react";
import ActivityCard from "./ActivityCard";
import ActivityModal from "./ActivityModal";
import activities from "./activitiesData";
import "./ActivitiesPage.css";

export default function ActivitiesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="activities-page">
      <h1 className="activities-title">Activities</h1>

      <div className="activities-grid">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onClick={() => setSelected(activity)}
          />
        ))}
      </div>

      {selected && (
        <ActivityModal
          activity={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
