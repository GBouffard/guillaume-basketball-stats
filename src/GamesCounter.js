import React from 'react'

const GamesCounter = ({ seasonStats }) => {
  const gamesPlayed = seasonStats.points.length
  return <div className='app-grid__games-counter'>{`${gamesPlayed} games`}</div>
}

export default GamesCounter
