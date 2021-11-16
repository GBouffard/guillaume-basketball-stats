import './App.css'
import React, { useState } from 'react'
import PlayerBiography from './PlayerBiography'
import TableHeader from './TableHeader'
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
            <TableHeader season={season} seasonStats={seasonStats} />

            <AllGamesStats seasonStats={seasonStats} />

            <TotalsAndAverageStats seasonStats={seasonStats} />
          </>
        )
      })}

    </div>
  )
}

export default App
