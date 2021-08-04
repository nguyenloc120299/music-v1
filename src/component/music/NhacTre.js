import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './music.css'
import Audio from './Audio'
import Detail from './Detail'
const NhacTre = () => {

    const context = useContext(GlobalContext)
    const [nhacTre] = context.nhac.nhacVN[0]
   
    const [nhac, setNhac] = useState([])
    const[nhacTreTotal,setNhacTreTotal]=useState([])
    const [index, setIndex] = useState(4)
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    useEffect(() => {
        const nhac=[]
        if (nhacTre){
               setNhac(nhacTre.songs[index])
               nhacTre.songs.forEach(p => {
                   nhac.push(p)
               });
               setNhacTreTotal(nhac)
               setIsPlay(false)
        }
 
          

    }, [nhacTre, index])

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
            if (newIndex > nhacTre.songs.length - 1) return 0;
            return newIndex;

        })
        setIsPlay(false)
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return nhacTre.songs.length - 1;
            return newIndex;
        });
        setIsPlay(false)
    };

    return (
        <div className='nhacTre'>
            <Audio nhac={nhac} audioRef={audioRef} handlePausePlayClick={handlePausePlayClick} isPlay={isPlay} next={handleNext} prev={handlePrev} />
            <div className='list-music'>
                {
                    nhacTreTotal.map((item, i) => (
                        <div className='detail' key={i} onClick={() => setIndex(i)}>
                          <Detail item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NhacTre
