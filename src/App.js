import './App.css'
import {
  calculateTotal,
  calculateAverage
} from './calculationHelper'
import PlayerBiography from './PlayerBiography'
import stats from './Stats'

const dailyGameStats = (seasonStats) => seasonStats.points.map((day, index) => {
  return (
    <>
      <div className='app-grid__points'>
        {seasonStats.points[index]}
      </div>
      <div className='app-grid__rebounds'>
        {seasonStats.rebounds ? seasonStats.rebounds[index] : '-'}
      </div>
      <div className='app-grid__assists'>
        {seasonStats.assists ? seasonStats.assists[index] : '-'}
      </div>
    </>
  )
})

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

const App = () => {
  return (
    <div className='app-grid'>
      <PlayerBiography />

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

            {dailyGameStats(seasonStats)}

            {totalsAndAverageStats(seasonStats)}
          </>
        )
      })}

    </div>
  )
}

export default App
