import './App.css'
import React, { useState } from 'react'
import PlayerBiography from './PlayerBiography'
import SeasonSelect from './SeasonSelect'
import GamesCounter from './GamesCounter'
import TableHeader from './TableHeader'
import AllGamesStats from './AllGamesStats'
import TotalsAndAverageStats from './TotalsAndAverageStats'
import stats from './Stats'

const seasonsList = Object.keys(stats)

const App = () => {
  const [selectedSeason, setSelectedSeason] = useState(seasonsList[seasonsList.length - 1])

  const handleSeasonChange = e => {
    setSelectedSeason(e.target.value)
  }

  const seasonStats = stats[selectedSeason]

  return (
    <div className='app-grid'>
      <PlayerBiography />

      <SeasonSelect onChange={handleSeasonChange} value={selectedSeason} seasonsList={seasonsList} />

      <GamesCounter seasonStats={seasonStats} />

      <TableHeader />

      <AllGamesStats seasonStats={seasonStats} />

      <TotalsAndAverageStats seasonStats={seasonStats} />
    </div>
  )
}

export default App
