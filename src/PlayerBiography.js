
import React from 'react'
import imagesUrls from './imagesUrls'

const frenchFlag = (
  <img
    alt='Boubou'
    className='french-flag'
    src={imagesUrls.flag}
  />
)

const PlayerBiography = () => <div className='app-grid__player-box'>
  <img
    alt='Boubou'
    className='boubou-image'
    src={imagesUrls.boubou}
  />
  <div className='player-info'>
    <div>Name: <strong>BOUFFARD Guillaume</strong></div>
    <div>D.O.B: <strong>09/04/1980</strong></div>
    <div>Height: <strong>169cm</strong></div>
    <div>Weight: <strong>62 Kgs</strong></div>
    <div className='nationality'>Nationality: {frenchFlag}</div>
    <div>Position: <strong>Point Guard</strong></div>
  </div>
</div>

export default PlayerBiography
