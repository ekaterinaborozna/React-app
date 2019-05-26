import React from 'react';
import { Player } from 'video-react';
import './video-react.css';
import './App.css';
/*import "node_modules/video-react/dist/video-react.css"*/

export default props => {
  return (
    <Player
      playsInline
      poster="track.gif"
      src="back.mp3"
       width={400}
        height={202}
    />
     
      /*this.refs.player.videoWidth = 50%; */
       /*poster="/assets/poster.png"*/
  );
};