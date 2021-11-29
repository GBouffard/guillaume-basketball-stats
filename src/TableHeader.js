
import React from 'react'

const TableHeader = ({ seasonStats }) => (
  <>
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
  </>
)

export default TableHeader
