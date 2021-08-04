import React, { useEffect, useState } from 'react'
import Image from './data/Image'
const Langding = () => {
    const [slide] = useState(Image)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timout = setTimeout(() => {
            setIndex(() => {
                let newIndex = index + 1;
                if (newIndex > slide.length - 1) return 0;
                return newIndex
            });
        }, 2500);
        return () => clearTimeout(timout);
    }, [index, slide])

    return (
        <div className='landing' >
            <img src={slide[index].src} alt='' />
            <div className='info'>
                <a href='#slider' style={{background: `${slide[index].type}`}}>Đi thôi nào <i className="fas fa-play-circle" /></a>
            </div>
        </div>
    )
}

export default Langding
