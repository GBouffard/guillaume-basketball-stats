import './App.css'
import React, { useState } from 'react'
import {
  calculateTotal,
  calculateAverage
} from './calculationHelper'
import PlayerBiography from './PlayerBiography'
import AllGamesStats from './AllGamesStats'
import stats from './Stats'

const totalsAndAverageStats = (seasonStats) =>
  (
    <div className='app-grid__header'>
      <div>TOTALS & AVERAGE</div>
      <div className='app-grid__totals'><div>{calculateTotal(seasonStats.points)}</div>
        <div>{calculateTotal(seasonStats.rebounds)}</div>
        <div>{calculateTotal(seasonStats.assists)}</div>
      </div>
      <div className='app-grid__average'><div>{calculateAverage(seasonStats.points)}</div>
        <div>{calculateAverage(seasonStats.rebounds)}</div>
        <div>{calculateAverage(seasonStats.assists)}</div>
      </div>
    </div>
  )

const seasonsList = Object.keys(stats)

const makeOptions = seasons =>
  seasons.map((season, i) => (
    <option value={season} key={i}>
      {season}
    </option>
  ))

const App = () => {
  const [dropdownValue, setDropdownValue] = useState(seasonsList[seasonsList.length - 1])

  const handleDropdownChange = e => {
    setDropdownValue(e.target.value)
  }

  return (
    <div className='app-grid'>
      <PlayerBiography />

      <select
        onChange={handleDropdownChange}
        value={dropdownValue}
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

            {totalsAndAverageStats(seasonStats)}
          </>
        )
      })}

    </div>
  )
}

export default App
