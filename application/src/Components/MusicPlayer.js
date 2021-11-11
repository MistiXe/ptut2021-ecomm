import React, {useState, useRef, useEffect} from "react";
import {BsVolumeDownFill, BsVolumeMuteFill} from "react-icons/bs"

function Music(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = useRef();

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        audioPlayer.current.volume = 0.02;

        if(!isPlaying) {
            audioPlayer.current.play();
        }
        else  {
            audioPlayer.current.pause();
        }
    }

    return (
        <div>
            <audio ref={audioPlayer} src="http://streaming.tdiradio.com:8000/house.mp3" preload="metadata"/>
        <btn onClick={togglePlayPause}>{isPlaying ? <BsVolumeDownFill /> : <BsVolumeMuteFill />}</btn>
        </div>

    );


}

export default Music;

