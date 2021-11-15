import './App.css'

const points = [8, 4, 10, 34, 7];
const rebounds = null
const assists = null

const addStatsColumns = points.map((day, index) => {
  return (
    <><div class='app-grid__points'>
      {points[index]}
      </div>
      <div class='app-grid__rebounds'>
        {rebounds ? rebounds[index] : '-'}
      </div>
      <div class='app-grid__assists'>
        {assists ? assists[index] : '-'}
      </div>
    </>
  )
})

const calculateAverage = (arr) => arr ? (arr.reduce((total, number) => {
  return total + number;
}, 0) / arr.length).toFixed(2) : '-';

const App = () => {
  return (
    <div class='app-grid'>
      <div class='app-grid__player-box'>Boubou</div>
      <div class='app-grid__points header'>
        POINTS
      </div>
      <div class='app-grid__rebounds header'>
        REBOUNDS
      </div>
      <div class='app-grid__assists header'>
        ASSISTS
      </div>

      {addStatsColumns}

      <div class='app-grid__points_total'>{calculateAverage(points)}</div>
      <div class='app-grid__rebounds_total'>{calculateAverage(rebounds)}</div>
      <div class='app-grid__assists_total'>{calculateAverage(assists)}</div>
    </div>
  )
}

export default App
