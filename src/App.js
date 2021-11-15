import './App.css'

const stats = {
  '2020-2021': {
    points: [8, 4, 10, 34, 7],
    rebounds: null,
    assists: null
  },

  '2021-2022': {
    points: [19, 9, 9, 18, 25, 9],
    rebounds: ['-', '-', '-', 1, 7, 5],
    assists: ['-', '-', 6, 5, 13, 7]
  }
}

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

const calculateAverage = (arr) => arr
  ? (arr.reduce((total, number) => {
      return number !== '-' ? total + number : total
    }, 0) / arr.length).toFixed(2)
  : '-'

const App = () => {
  return (
    <div className='app-grid'>
      <div className='app-grid__player-box'>Boubou</div>

      {Object.keys(stats).map(season => {
        const seasonStats = stats[season]
        return (
          <>
            <div className='app-grid__season'>{season}</div>
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
