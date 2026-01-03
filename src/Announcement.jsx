import React from 'react'
import './Announcement.css'

const Announcement = () => {
    return (
        <div className="announcements" id="announcements">
            <h2>Announcements</h2>

            <div className="announcement-container">
                <div className="announcement-card">
                    <h3>RSF Annual Meet 2025</h3>
                    <p>
                        Join us for the RSF Annual Meet on <strong>22nd November 2025</strong>,
                        featuring keynote talks and interdisciplinary research discussions.
                    </p>
                    <span className="date">Posted: Oct 18, 2025</span>
                </div>

                <div className="announcement-card">
                    <h3>Call for Poster Presentation</h3>
                    <p>
                        We invite submissions for the upcoming RSF Research Poster Exhibition.
                        Deadline: <strong>30th October 2025</strong>.
                    </p>
                    <span className="date">Posted: Oct 15, 2025</span>
                </div>

                <div className="announcement-card">
                    <h3>New Collaboration Initiative</h3>
                    <p>
                        RSF introduces a new inter-departmental collaboration program.
                        Interested scholars can apply through the RSF portal.
                    </p>
                    <span className="date">Posted: Oct 10, 2025</span>
                </div>
            </div>


        </div>
    )
}

export default Announcement
