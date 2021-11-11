import React, {useState} from "react";
import Sound from "react-sound";


function Music() {
   return(
       <Sound
           url="cool_sound.mp3"
           playStatus={Sound.status.PLAYING}
           playFromPosition={300 /* in milliseconds */}
           onLoading={this.handleSongLoading}
           onPlaying={this.handleSongPlaying}
           onFinishedPlaying={this.handleSongFinishedPlaying}
       />
   );

}

export default Music;

