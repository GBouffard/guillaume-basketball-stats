import React, { Component } from 'react'

const scrollToBottom = () => {
  const myDiv = document.getElementById('scrollable-table')
  myDiv.scrollTop = myDiv.scrollHeight
}

class AllGamesStats extends Component {
  componentDidMount () {
    scrollToBottom()
  }

  componentDidUpdate () {
    scrollToBottom()
  }

  render () {
    const { seasonStats } = this.props

    return (
      <div className='app-grid__games-table' id='scrollable-table'>
        {seasonStats.points.map((day, index) => (
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
          </>))}
      </div>
    )
  }
}

export default AllGamesStats
