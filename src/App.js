import './App.css'

const App = () => {
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

  return (
    <div class='app-grid'>
      <div class='app-grid__player-box'>Boubou</div>
      <div class='app-grid__points'>
        POINTS
      </div>
      <div class='app-grid__rebounds'>
        REBOUNDS
      </div>
      <div class='app-grid__assists'>
        ASSISTS
      </div>

      {addStatsColumns}

      <div class='app-grid__points_total' />
      <div class='app-grid__rebounds_total' />
      <div class='app-grid__assists_total' />
    </div>
  )
}

export default App
