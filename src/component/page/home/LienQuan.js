import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'
const LienQuan = ({PlayNhac}) => {

    const context =useContext(GlobalContext)
    const [nhacTre] = context.nhac.nhacVN[0]
    const nhacTruTinh = context.nhac.nhacVN[0][1]
    const [PopAM]=context.nhac.nhacAuMy[0]
    const [nhacHQ]=context.nhac.nhacChauA[0]
    const nhacRap=context.nhac.nhacVN[0][4]

    return (
        <>
           
            <div className='Lien-quan'>
                <div className='nhac' onClick={()=>PlayNhac(nhacTre)}>
                    <Link to='#' > <img src='https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/9/7/1/0971bf1988e9bfb37aa6dc4e1b82fc3c.jpg' alt='' /></Link>
                    <Link to='#'>Top 100 Nhạc trẻ hay nhất</Link>
                </div>
                <div className='nhac' onClick={()=>PlayNhac(nhacTruTinh)}>
                    <Link to='#'> <img src='https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/9/8/7/f987690e18af09d221abd9c0aab7a44d.jpg' alt='' /></Link>
                    <Link to='#'>Top 100 Nhạc trữ tình hay nhất</Link>
                </div>

                <div className='nhac' onClick={()=>PlayNhac(PopAM)}>
                   
                    <Link to='#'> <img src='https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg' alt='' /></Link>
                    <Link to='#'>Top 100 Nhạc Âu Mỹ hay nhất</Link>
                </div>
                <div className='nhac' onClick={()=>PlayNhac(nhacHQ)}>
                    <Link to='#'> <img src='https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg' alt='' /></Link>
                    <Link to='#'>Top 100 Nhạc Hàn Quốc hay nhất</Link>
                </div>
                <div className='nhac' onClick={()=>PlayNhac(nhacRap)}>
                    <Link to='#'> <img src='https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg' alt='' /></Link>
                    <Link to='#'>Top 100 Nhạc Rap hay nhất</Link>
                </div>
               
            </div>
        </>
    )
}

export default LienQuan
