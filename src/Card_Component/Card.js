import React from 'react'
import './Card.css'

export default function Card({ robots }) {
  return (
    <div className='robot-list'>
      {
        robots.map((robot) => (
          <div className='card' key={robot.id}>
            <img alt={`robot ${robot.name}`} src={`https://robohash.org/${robot.id}?size=200x200`} />
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
        ))
      }
      </div>
  )
}
