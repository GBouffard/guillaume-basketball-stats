import React from 'react'

const AllGamesStats = ({ seasonStats }) => seasonStats.points.map((day, index) => (
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
))

export default AllGamesStats
