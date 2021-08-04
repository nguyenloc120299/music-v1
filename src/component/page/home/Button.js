import React from 'react'

const Button = ({listRef}) => {
    const onNext=()=>{
        const slide =listRef.current
        slide.scrollLeft += slide.offsetWidth;
       
        if(slide.scrollLeft>=(slide.scrollWidth-slide.offsetWidth)){
          slide.scrollLeft=0;
        }
    }
    const onPrev = () => {
        const slide = listRef.current
        slide.scrollLeft -= slide.offsetWidth;
     
        if(slide.scrollLeft<=0){
          slide.scrollLeft=slide.scrollWidth;
        }
    
      }
    return (
        <>
            <div className='left-slide'>
                <i className="fas fa-chevron-left" onClick={()=>onPrev()} />
            </div>
            <div className='right-slide'>
             <i className="fas fa-chevron-right"  onClick={()=>onNext()}/>
            </div>
        </>
    )
}

export default Button
