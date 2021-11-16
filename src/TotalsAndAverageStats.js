import React from 'react'
import {
  calculateTotal,
  calculateAverage
} from './calculationHelper'

const AllGamesStats = ({ seasonStats }) => (
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

export default AllGamesStats
