
import React from 'react'
import imagesUrls from './imagesUrls'
import weight from './weight'

const frenchFlag = (
  <img
    alt='Boubou'
    className='french-flag'
    src={imagesUrls.flag}
  />
)

const PlayerBiography = ({selectedSeason}) => <div className='app-grid__player-box'>
  <img
    alt='Boubou'
    className='boubou-image'
    src={imagesUrls.boubou(selectedSeason)}
  />
  <div className='player-info'>
    <div>Name: <strong>BOUFFARD Guillaume</strong></div>
    <div>Position: <strong>Point Guard</strong></div>
    <div>Club: <strong>Saintes Basketball</strong></div>
    <div className='nationality'>Nationality: {frenchFlag}</div>
    <div>Height: <strong>169cm</strong></div>
    <div>Weight: <strong>{weight[selectedSeason] || 64} Kgs</strong></div>
    <div>D.O.B: <strong>9 Apr. 1980</strong></div>
    <img
    alt='club'
    className='club-image'
    src={selectedSeason.indexOf('2021') > -1 ? imagesUrls.oldSaintesLogo : imagesUrls.saintesLogo}
  />
  </div>
</div>

export default PlayerBiography
