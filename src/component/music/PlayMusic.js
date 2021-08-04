import React from 'react'

const PlayMusic = ({prev,next,handlePausePlayClick,isPlay}) => {
    return (
        <div className='icon-music'>
        <i className="fas fa-backward"  onClick={()=>prev()}/>
        <div className='play-music' onClick={()=>handlePausePlayClick()}>
            {isPlay ? <i className="fas fa-pause" /> : <i className="fas fa-play-circle" />}
        </div>

        <i className="fas fa-forward" onClick={()=>next()} />
    </div>
    )
}

export default PlayMusic
