import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './music.css'
import Audio from './Audio'
import Detail from './Detail'
const PopAM = () => {

    const context = useContext(GlobalContext)
  const [PopAM]=context.nhac.nhacAuMy[0]
  const [PopAMTotal,setPopAMTotal]=useState([])
  
    const [nhac, setNhac] = useState([])
    const [index, setIndex] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    useEffect(() => {
        const nhactt=[]
        if (PopAM){
            setNhac(PopAM.songs[index])
          
            PopAM.songs.forEach(p => {
                nhactt.push(p)
            });
            setPopAMTotal(nhactt)
            setIsPlay(false)
        }

    }, [PopAM, index])

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();

        } else {
            audioRef.current.play();
        }
        setIsPlay(!isPlay)

    };

    const handleNext = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if (newIndex >PopAM.songs.length - 1) return 0;
            return newIndex;
        })
        setIsPlay(false)
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return PopAM.songs.length - 1;
            return newIndex;
        });
        setIsPlay(false)
    };
    return (
        <div className='nhacTre'>
            <Audio nhac={nhac} audioRef={audioRef} handlePausePlayClick={handlePausePlayClick} isPlay={isPlay} next={handleNext} prev={handlePrev} />
            <div className='list-music'>
                {
                    PopAMTotal.map((item, i) => (
                        <div className='detail' key={i} onClick={() => setIndex(i)}>
                          <Detail item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PopAM
