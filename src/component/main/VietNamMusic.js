import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import Detail from '../music/Detail'
import './page.css'
import Audio from '../music/Audio'
const VietNamMusic = () => {
    const context = useContext(GlobalContext)
    const [index,setIndex]=useState(0)
    const nhacTre = context.nhac.nhacVN[0][index]
    const[playMusic,setPlayMusic]=useState(0)
    const [nhac, setNhac] = useState([])
    const[nhacTreTotal,setNhacTreTotal]=useState([])
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    useEffect(() => {
        const nhac=[]
        if (nhacTre){
            setNhac(nhacTre.songs[playMusic])
               nhacTre.songs.forEach(p => {
                   nhac.push(p)
               });
               setNhacTreTotal(nhac)
           
        }
 
          

    }, [nhacTre,playMusic])

    const handleOnchane=(e)=>{
        setIndex(e.target.value)

    }
    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();

        } else {
            audioRef.current.play();
        }
        setIsPlay(!isPlay)

    };

    const handleNext = () => {
        setPlayMusic((index) => {
            let newIndex = index + 1;
            if (newIndex > nhacTre.songs.length - 1) return 0;
            return newIndex;

        })
        setIsPlay(false)
    }

    const handlePrev = () => {
        setPlayMusic((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return nhacTre.songs.length - 1;
            return newIndex;
        });
        setIsPlay(false)
    };
    const clickMusic=(i)=>{
        setPlayMusic(i)
        setIsPlay(true)
     

    
    }
    return (
        <div className='page-music'>
            <div className='title'>
                <h3>Danh sách bài hát</h3>
                <select title='Thể loại' onChange={handleOnchane}>
                    <option value=''>Chọn thể loại</option>
                    <option value={0}>Nhạc trẻ</option>
                    <option value={1}>Nhạc trữ tính</option>
                    <option value={2}>Nhạc Trịnh</option>
                    <option value={3}>Nhạc tiền chiến</option>
                    <option value={4}>Rap Việt</option>
                    <option value={5}>Remix Việt</option>
                
                </select>
            </div>
            <div className='nhacTre'>
            <Audio nhac={nhac} audioRef={audioRef} handlePausePlayClick={handlePausePlayClick} isPlay={isPlay} next={handleNext} prev={handlePrev} />
            <div className='list-music'>
                {
                    nhacTreTotal.map((item, i) => (
                        <div className='detail' key={i} onClick={() => clickMusic(i)}>
                          <Detail item={item}/>
                        </div>
                    ))
                }
            </div>
            </div>
            
        </div>
    )
}

export default VietNamMusic
