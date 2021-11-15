import './App.css'
import PlayerBiography from './PlayerBiography'
import stats from './Stats'

const addStatsColumns = (seasonStats) => seasonStats.points.map((day, index) => {
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

const divider = arr => {
  let noValuesLength = 0;
  noValuesLength = arr.filter(el => el === '-').length;
  return arr.length - noValuesLength;
}

const calculateAverage = (arr) => arr
  ? (arr.reduce((total, number) => {
      return number !== '-' ? total + number : total
    }, 0) / divider(arr)).toFixed(2)
  : '-'

const App = () => {
  return (
    <div className='app-grid'>
      <PlayerBiography />

      {Object.keys(stats).map(season => {
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

            {addStatsColumns(seasonStats)}

            <div className='app-grid__points_total'>{calculateAverage(seasonStats.points)}</div>
            <div className='app-grid__rebounds_total'>{calculateAverage(seasonStats.rebounds)}</div>
            <div className='app-grid__assists_total'>{calculateAverage(seasonStats.assists)}</div>
          </>
        )
      })}

    </div>
  )
}

export default App
