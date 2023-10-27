///import React, { useCallback, useEffect, useRef, useState } from 'react';

// import { getDuration } from '../../helper';

// import audio from 'assets/music/coaycuaanhay.mp3';
// import thumbnail from 'assets/image/music/1.jpg';

import { useCallback, useEffect, useRef, useState } from 'react';
import './music.css';


export default function Play({ title, artist, image, file, id, onPrev, onNext, onNextMusic, onSelectMuics }) {

    const [isPlaying, setIsPlaying] = useState(false);

    const [timer, setTimer] = useState(0);

    const [duration, setDuration] = useState(0);

    const audioRef = useRef();

    const onUpdateTimer = useCallback(() => {
        setTimer(audioRef.current.currentTime);
    }, []);


    const playPause = useCallback(() => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying((prevState) => !prevState)
    }, [isPlaying],
    );

    useEffect(() => {
        setIsPlaying(false);
    }, [id, onSelectMuics])

    const getTrackLength = () => {
        audioRef.current.addEventListener('loadedmetadata', function () {
            // Thân hàm
            setDuration(audioRef.current.duration);
        });
    }

    useEffect(() => {
        getTrackLength();
    }, []);

    const onChangeSlider = useCallback((event) => {
        audioRef.current.currentTime = event.target.value;
    }, []);

    const getDuration = (duration) => {
        const minutes = Math.floor(duration / 60); // Số phút
        const seconds = Math.floor(duration % 60); // Số giây

        const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        return formattedDuration;
    };

    const onReloadMusic = () => {
        audioRef.current.load();
    };

    return (
        <div className="rightside d-flex">
            <div className="info d-flex flex-column justify-content-start">
                <h1>Now Playing</h1>

                <p>55 Items on the list</p>
            </div>

            <div className="playingsong d-flex">
                <div className="disc-wrapper">
                    <div className={`music-disc ${isPlaying ? 'music-disc-spin' : ''}`} src={image}>
                        <div className="center-circle" />
                    </div>

                    <div className="song-title">
                        <h3>{title}</h3>

                        <p>{artist}</p>
                    </div>

                    <audio
                        id="song"
                        src={file}
                        type="audio/mpeg"
                        ref={audioRef}
                        onTimeUpdate={onUpdateTimer}
                        onEnded={onNextMusic}
                    />


                    <input
                        type="range"
                        defaultValue={0}
                        max={duration}
                        value={timer}
                        id="progress"
                        onInput={onChangeSlider}
                    />

                    <div className="timer d-flex justify-content-between">
                        <div className="duration">{getDuration(duration)}</div>

                        <div className="remain">{getDuration(timer)}</div>
                    </div>
                </div>

                <div className="control-button d-flex">
                    <div>
                        <i class="fa-brands fa-mixer"></i>
                    </div>

                    <div>
                        <i className="fa-solid fa-backward" onClick={onPrev} />
                    </div>

                    <div onClick={playPause}>
                        {isPlaying ? (
                            <i className="fa-solid fa-pause fa-2xl"></i>
                        ) : (
                            <i className="fa-solid fa-play fa-2xl"></i>
                        )}
                    </div>

                    <div>
                        <i className="fa-solid fa-forward" onClick={onNext} />
                    </div>

                    <div>
                        <i className="fa fa-refresh" aria-hidden="true" onClick={onReloadMusic}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
