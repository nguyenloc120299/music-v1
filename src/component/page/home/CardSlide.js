import React, { useState } from 'react'

const CardSlide = ({ item ,id,handleIndex}) => {
   
    const[isShow,setIsShow]=useState(false)
  



    return (
        <div className={'card'} onMouseLeave={()=>setIsShow(false)} onMouseMove={()=>setIsShow(true)} >
            <img src={item.bgImage} alt='' />
            <div className='des-slide'>
                <h4>{item.title}</h4>
                <h5> Ca sĩ : {item.creator}</h5>
            </div>
            {

                isShow ?
            
            <div className='play-audio' onClick={()=>handleIndex(id)}  >
             <i className="fas fa-headphones"/>
            </div>
            :
            ''}
    
        </div>
    )
}

export default CardSlide
