import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../../GlobalContext'
import Button from './Button'
import CardSlide from './CardSlide'
import './home.css'
import LienQuan from './LienQuan'
import Audio from './Audio'
import Langding from './Langding'
import KhamPha from './KhamPha'
const Home = () => {
    const context = useContext(GlobalContext)
    const [slide, setSlide] = useState([])
    const nhacTre = context.nhac.nhacVN[0][5]
    const nhacTruTinh = context.nhac.nhacVN[0][1]
    const [PopAM]=context.nhac.nhacAuMy[0]
    const [nhacHQ]=context.nhac.nhacChauA[0]
    const nhacRap=context.nhac.nhacVN[0][4]
    const nhacHay=context.nhac.nhacVN[0][0]
    const [audioMusic, setaudioMusic] = useState([])
    const [isPlay, setIsPlay] = useState(false)
    const audioRef = useRef()
    const listRef = useRef()
    const[isShow,setisShow]=useState(false)
    const [name,setName]=useState('')
    const [isShowBtnNext,setShowBtnNext]=useState(false)
    const [index, setIndex] = useState(3)
    const[show,setShow]=useState(false)
    const[nhacTreTotal,setNhacTreTotal]=useState([])
    const handlePausePlayClick = () => {
        if (isPlay) {
          audioRef.current.pause();
          
        } else {
          audioRef.current.play();
        }
        setIsPlay(!isPlay)
    
      };


    useEffect(() => {
        const nhacSlide = []

        if (nhacTre && nhacHay){

            nhacTre.songs.slice(0,10).forEach(e => {
                nhacSlide.push(e)
             //   setSlide(nhacSlide)
            });
            nhacHay.songs.slice(0,20).forEach(e => {
                nhacSlide.push(e)
              //  setSlide(nhacSlide)
            });
        }
        setSlide(nhacSlide)
    }, [nhacTre,nhacHay])

    const handleIndex = (i) => {

        slide.slice(0, 50).forEach(s => {
            if (s.avatar.slice(60, 70) === i) {
                setaudioMusic(s)
                
            }
        });
        setIsPlay(true)
        setisShow(true)
        setShowBtnNext(false)
    }

    const closeAudio=()=>{
        setisShow(false)
        audioRef.current.pause();

    }
    const handleNext = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if (newIndex > 99) return 0;
            return newIndex;

        })
  
       if(name==='Trữ Tình')  setaudioMusic(nhacTruTinh.songs[index])
       if(name==='Nhạc Trẻ') setaudioMusic(nhacTre.songs[index])
        if(name==="Pop") setaudioMusic(PopAM.songs[index])
        if(name==="Nhạc Hàn") setaudioMusic(nhacHQ.songs[index])
        if(name==="Rap Việt") setaudioMusic(nhacRap.songs[index])

        
    }
  
    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) return 99;
            return newIndex;
        });
        if(name==='Trữ Tình')  setaudioMusic(nhacTruTinh.songs[index])
        if(name==='Nhạc Trẻ') setaudioMusic(nhacTre.songs[index])
         if(name==="Pop") setaudioMusic(PopAM.songs[index])
         if(name==="Nhạc Hàn") setaudioMusic(nhacHQ.songs[index])
         if(name==="Rap Việt") setaudioMusic(nhacRap.songs[index])
           
     
    };
    const PlayNhac=(music)=>{
        setShow(true)
        const nhac=[]
        if (music){
               setaudioMusic(music.songs[index])
               music.songs.forEach(p => {
                   nhac.push(p)
               });
               setNhacTreTotal(music)
               setName(music.name)
               setIsPlay(true)
               setShowBtnNext(true)
               setisShow(true)
        }
 
    }
    return (
        <div className='home'>
            <Langding />
            <div className='home-slider' id='slider'>
                <h2 style={{ textAlign: 'left', margin: '20px', marginTop: '20px', color: '#666' }}>Nhạc nghe nhiều nhất</h2>
                <div className='slider' ref={listRef}>
                    {
                        slide.map((item, i) => (
                            <>
                                <CardSlide item={item} key={i} id={item.avatar.slice(60, 70)} handleIndex={handleIndex}  isPlay={isPlay} />

                            </>
                        ))

                    }
             
                </div>
                <Button listRef={listRef} />
            </div>
            <h2 style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Có thể bạn muốn nghe</h2>
            <LienQuan PlayNhac={PlayNhac} />
            <h2 style={{ textAlign: 'center', margin: '20px', color: '#666' }}>Khám phá</h2>
            <KhamPha />
            <Audio item={audioMusic} isPlay={isPlay}  audioRef={audioRef} play={handlePausePlayClick} isShow={isShow} close={closeAudio}
               prev={handlePrev} next={handleNext} isNext={isShowBtnNext}
            />
        </div>
    )
}

export default Home
