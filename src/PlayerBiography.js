
import React from 'react';
import imagesUrls from "./imagesUrls";

const frenchFlag = <img
alt="Boubou"
className="french-flag"
src={imagesUrls.flag}
/>

const PlayerBiography = () => <div className='app-grid__player-box'>
                <img
              alt="Boubou"
              className="boubou-image"
              src={imagesUrls.boubou}
            />
            <div className="player-info">
                <div>Name: BOUFFARD</div>
                <div>Surname: Guillaume</div>
                <div>D.O.B: 09/04/1980</div>
                <div>Height: 169cm</div>
                <div>Weight: 62 Kgs</div>
                <div className="nationality">Nationality: {frenchFlag}</div>
            </div>
</div>;

export default PlayerBiography;