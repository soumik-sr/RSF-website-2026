import React from 'react'
import './Announcement.css'

const Announcement = () => {
    return (
        <div className="announcements" id="announcements">
            <h2>Announcements</h2>

            <div className="announcement-container">
                <div className="announcement-card">
                    <h3>Navadhi</h3>
                    <p>
                        RSF proudly presents NavaDhi, our flagship three-day research fest at IITD, taking place on <strong>January 21-23, 2026</strong>.
                        The research fest aims to bring together innovative ideas, creativity in research, scientific exchanges, competitions, and camaraderie, designed to celebrate the spirit of research.
                    </p>
                    <span className="date">Posted: Jan 4, 2026</span>
                </div>

                <div className="announcement-card">
                    <h3>BT_reads</h3>
                    <p>
                        One hour of focused reading, followed by some light discussion and games! Join us on
                        <strong>Saturday, 10th January 3:00 PM at Biotech Lawns</strong> with a book—or anything you’d love to read and unwind with.
                    </p>
                    <span className="date">Posted: Jan 4, 2026</span>
                </div>

                <div className="announcement-card">
                    <h3>Srijan & Prastuti</h3>
                    <p>
                        Exciting competitions designed to showcase your research through innovative and engaging video presentations. An opportunity to blend Science, Technology, and Arts, making research accessible to a wider audience while fostering collaborations across academia, industry, and creative disciplines.
                    </p>
                    <span className="date">Posted: Jan 4, 2026</span>
                </div>
            </div>


        </div>
    )
}

export default Announcement
