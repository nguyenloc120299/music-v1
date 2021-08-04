import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './music.css'
import Audio from './Audio'
import Detail from './Detail'
const NhacHQ = () => {

    const context = useContext(GlobalContext)
  const [nhacHQ]=context.nhac.nhacChauA[0]
  const [nhacHQTotal,setHQTotal]=useState([])
  
    const [nhac, setNhac] = useState([])
    const [index, setIndex] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    useEffect(() => {
        const nhactt=[]
        if (nhacHQ){
            setNhac(nhacHQ.songs[index])
          
            nhacHQ.songs.forEach(p => {
                nhactt.push(p)
            });
            setHQTotal(nhactt)
            setIsPlay(false)
        }

    }, [nhacHQ, index])

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
            if (newIndex > nhacHQ.songs.length - 1) return 0;
            return newIndex;
        })
        setIsPlay(false)
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return nhacHQ.songs.length - 1;
            return newIndex;
        });
        setIsPlay(false)
    };
    return (
        <div className='nhacTre'>
            <Audio nhac={nhac} audioRef={audioRef} handlePausePlayClick={handlePausePlayClick} isPlay={isPlay} next={handleNext} prev={handlePrev} />
            <div className='list-music'>
                {
                    nhacHQTotal.map((item, i) => (
                        <div className='detail' key={i} onClick={() => setIndex(i)}>
                          <Detail item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NhacHQ
