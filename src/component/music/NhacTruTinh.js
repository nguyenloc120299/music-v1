import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './music.css'
import Audio from './Audio'
import Detail from './Detail'
const NhacTruTinh = () => {

    const context = useContext(GlobalContext)
  const nhacTruTinh=context.nhac.nhacVN[0][1]
  const [nhacTruTinhTotal,setNhacTRuTinhTotal]=useState([])
  
    const [nhac, setNhac] = useState([])
    const [index, setIndex] = useState(4)
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    useEffect(() => {
        const nhactt=[]
        if (nhacTruTinh){
            setNhac(nhacTruTinh.songs[index])
            
            nhacTruTinh.songs.forEach(p => {
                nhactt.push(p)
            });
            setNhacTRuTinhTotal(nhactt)
            setIsPlay(false)
        }

    }, [nhacTruTinh, index])

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
            if (newIndex > nhacTruTinh.songs.length - 1) return 0;
            return newIndex;
        })
        setIsPlay(false)
        audioRef.current.play();
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return nhacTruTinh.songs.length - 1;
            return newIndex;
        });
        setIsPlay(false)
        audioRef.current.play();
    };
    return (
        <div className='nhacTre'>
            <Audio nhac={nhac} audioRef={audioRef} handlePausePlayClick={handlePausePlayClick} isPlay={isPlay} next={handleNext} prev={handlePrev} />
            <div className='list-music'>
                {
                    nhacTruTinhTotal.map((item, i) => (
                        <div className='detail' key={i} onClick={() => setIndex(i)}>
                          <Detail item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NhacTruTinh
