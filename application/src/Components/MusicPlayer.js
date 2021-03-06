import React, {useState} from "react";
import {BsVolumeDownFill, BsVolumeMuteFill} from "react-icons/bs"
import Sound from 'react-sound';

function Music(props) {
    const [isPlaying, setIsPlaying] = useState(true);
    if (isPlaying) {
        return (
            <div className="musicDiv">
                <Sound
                    url={props.src}
                    playStatus={Sound.status.PLAYING}
                    loop={true}
                    volume={5} />
                <btn onClick={() => setIsPlaying(false)}>{isPlaying ? <BsVolumeDownFill className="musicIcon"/> : <>
                    <BsVolumeMuteFill className="musicIcon"/></>}</btn>

            </div>


        );
    } else {
        return (
            <div className="musicDiv">
                <Sound
                    url={props.src}
                    playStatus={Sound.status.PAUSED}
                    loop={true}
                    volume={10}
                />
                <btn onClick={() => setIsPlaying(true)}>{isPlaying ? <BsVolumeDownFill className="musicIcon"/> : <>
                    <BsVolumeMuteFill className="musicIcon"/></>}</btn>


            </div>

        )
    }


}

export default Music;

