import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div id="home">
            <h1>Step into progress</h1>
            <p>Join us in advancing research through collaboration and innovation.</p>
            <div className="button-container">
                <button className="explore-button" onClick={() => window.location.href='#events'}>Explore</button>
            </div>
        </div>
    )
}

export default Home
