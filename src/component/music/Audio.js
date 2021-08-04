import React, { useState } from 'react'
import TimeSlider from 'react-input-slider'

const Audio = ({ nhac, audioRef, handlePausePlayClick, isPlay,next ,prev}) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [Play, setPlay] = useState(false);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (Play || isPlay) audioRef.current.play();
    };
    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!Play) {
            setPlay(true);
            audioRef.current.play();
        }
    };

  
    return (
        <div className='audio-music'>
            <img alt='' src={nhac.bgImage} />
            <div className='info-music'>
                <img alt='avatar' src={nhac.avatar} className={isPlay ? 'img' : ''}/>
                <div className='des-info'>
                    <h4>{nhac.title}</h4>
                    <h5>{nhac.creator}</h5>
                </div>

            </div>
            <div className='icon-music'>
                <i className="fas fa-backward"  onClick={()=>prev()}/>
                <div className='play-music' onClick={()=>handlePausePlayClick()}>
                    {isPlay ? <i className="fas fa-pause" /> : <i className="fas fa-play-circle" />}
                </div>

                <i className="fas fa-forward" onClick={()=>next()} />
            </div>
      
            <div className='time-audio'>
                <TimeSlider
                    axis="x"
                    xmax={duration}
                    x={currentTime}
                    onChange={handleTimeSliderChange}
                    styles={{
                        track: {
                            backgroundColor: "#fff",
                            height: "2px",
                            width: '90%'
                        },
                        active: {
                            backgroundColor: "teal",
                            height: "3px",

                            borderRadius: '3px'
                        },
                        thumb: {
                            marginTop: "-2px",
                            width: "10px",
                            height: "10px",
                            backgroundColor: "teal",

                            borderRadius: '2px'
                        },
                    }}
                />
            </div>
            <audio src={nhac.music} ref={audioRef}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => setPlay(false)}
            />
        </div>
    )
}

export default Audio
