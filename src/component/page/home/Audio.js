import React, { useState } from 'react'
import TimeSlider from 'react-input-slider'
const Audio = ({ item, audioRef, isPlay, play, isShow, close, next, prev, isNext }) => {
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
        <div className='audio' style={isShow ? { display: 'flex' } : { display: 'none' }}>
            <div className='close-audio' onClick={() => close()}>X</div>
            <div className='info'>
                <img src={item.avatar} alt='' className='img' />
                <div className='des'>
                    <div className='des-info'>
                        <h4>{item.title}</h4>
                        <span>Ca sĩ : {item.creator}</span>
                    </div>
                    <TimeSlider
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}

                        styles={{
                            track: {
                                backgroundColor: "#fff",
                                height: "2px",
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
                {
                    isNext ?

                        <div className='audio-isplay'>
                            <i className="fas fa-backward" onClick={() => prev()} />
                            <div className='play--music' onClick={() => play()}  >

                                {isPlay ? <i className="fas fa-pause" /> : <i className="fas fa-play-circle" />}
                            </div>
                            <i className="fas fa-forward" onClick={() => next()} />
                        </div>
                        :
                        <div className='play--music' onClick={() => play()}  >

                            {isPlay ? <i className="fas fa-pause" /> : <i className="fas fa-play-circle" />}
                        </div>
                }
            </div>


            <audio src={item.music} ref={audioRef}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => setPlay(false)}
            />
        </div>
    )
}

export default Audio