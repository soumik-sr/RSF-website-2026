import React from 'react'
import './cards.css'
const card = (props) => {
  return (
    <div className="cards">
      <div className='cardsPicture'>
        <img src={props.image} alt="cards Image" />
      </div>
      <div className='cardsContent'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className='schedule'>
        <h4>Event Schedule</h4>
        <ul>
          <li>{props.schedule}</li>
        </ul>
      </div>
    </div>
  )
}

export default card
