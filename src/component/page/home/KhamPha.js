import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const KhamPha = () => {

    const[isShow,setIsShow]=useState(false)
    const[isShow1,setIsShow1]=useState(false)
    const[isShow2,setIsShow2]=useState(false)
    return (
        <div className='kham-pha'>
        <div className='nhac-khamPha' onMouseMove={()=>setIsShow(true)} onMouseLeave={()=>setIsShow(false)}>
            <Link to='/:100nhactre'> <img src='https://i.pinimg.com/564x/48/c0/61/48c061aeae5357c142af271f32826bd2.jpg' alt='' /></Link>
            <div className='des-kp' style={isShow ? {top: '0'}: {top: '-100%'}}>
               <Link to=''>Khám phá ngay <i className="fas fa-play-circle" /></Link>
            </div>
          
        </div>
        <div className='nhac-khamPha'  onMouseMove={()=>setIsShow1(true)} onMouseLeave={()=>setIsShow1(false)}>
            <Link to=''> <img src='https://i.pinimg.com/564x/c1/33/70/c1337005d6c76736799ca60c4b14500d.jpg' alt='' /></Link>
            <div className='des-kp' style={isShow1 ? {top: '0'}: {top: '-100%'}} >
               <Link to=''>Khám phá ngay <i className="fas fa-play-circle" /></Link>
            </div>
        </div>

        <div className='nhac-khamPha'  onMouseMove={()=>setIsShow2(true)} onMouseLeave={()=>setIsShow2(false)}>
           
            <Link to=''> <img src='https://i.pinimg.com/564x/38/b2/2a/38b22aa8d532eb05e104d01c37ba2271.jpg' alt='' /></Link>
            <div className='des-kp'  style={isShow2 ? {top: '0'}: {top: '-100%'}}>
               <Link to=''>Khám phá ngay <i className="fas fa-play-circle" /></Link>
            </div>
        </div>
  

    </div>
    )
}

export default KhamPha
