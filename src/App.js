import './App.css'
import React, { useState } from 'react'
import PlayerBiography from './PlayerBiography'
import AllGamesStats from './AllGamesStats'
import TotalsAndAverageStats from './TotalsAndAverageStats'
import stats from './Stats'

const seasonsList = Object.keys(stats)

const makeOptions = seasons =>
  seasons.map((season, i) => (
    <option value={season} key={i}>
      {season}
    </option>
  ))

const App = () => {
  const [selectedSeason, setSelectedSeason] = useState(seasonsList[seasonsList.length - 1])

  const handleSeasonChange = e => {
    setSelectedSeason(e.target.value)
  }

  return (
    <div className='app-grid'>
      <PlayerBiography />

      <select
        onChange={handleSeasonChange}
        value={selectedSeason}
        defaultValue={seasonsList[seasonsList.length - 1]}
      >
        {makeOptions(seasonsList)}
      </select>

      {seasonsList.map(season => {
        const seasonStats = stats[season]
        return (
          <>
            <div className='app-grid__season'>{season}</div>
            <div className='app-grid__games_played header'>
              GAMES PLAYED:
            </div>
            <div className='app-grid__games'>
              {seasonStats.points.length}
            </div>
            <div className='app-grid__points header'>
              POINTS
            </div>
            <div className='app-grid__rebounds header'>
              REBOUNDS
            </div>
            <div className='app-grid__assists header'>
              ASSISTS
            </div>

            <AllGamesStats seasonStats={seasonStats} />

            <TotalsAndAverageStats seasonStats={seasonStats} />
          </>
        )
      })}

    </div>
  )
}

export default App
