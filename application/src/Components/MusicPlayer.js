import React, {useState, useRef} from "react";
import {BsVolumeDownFill, BsVolumeMuteFill} from "react-icons/bs"

function Music(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = useRef();

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        audioPlayer.current.volume = 0.05;


        if (!isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }


    return (
        <div>
            <audio ref={audioPlayer} src={props.src} preload="metadata"/>
            <btn onClick={togglePlayPause}>{isPlaying ? <BsVolumeDownFill className="musicIcon"/> : <><BsVolumeMuteFill className="musicIcon"/></>}</btn>

        </div>

    );


}

export default Music;

