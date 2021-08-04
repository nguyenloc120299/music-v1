import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import ('./header.css')
const Header = () => {

    const [isShow,setIsShow]=useState(false)
    return (
        <div className='topbar'>
                <div className='logo'>
                  <Link to='/'><h3>Chill</h3>
                  <i className="fas fa-music"/></Link>  
            
                </div>
                <div className='close-topbar' onClick={()=>setIsShow(!isShow)}>
                 {isShow ? <AiOutlineClose/>:   <BiMenuAltLeft/>}
                </div>
                <ul style={isShow ? {left: '0'} : {left : '-100%'}}>
                    <li><Link to='/nhacvietnam'>Nhạc Việt Nam</Link></li>
                    <li><Link to='/nhacchaua'>Nhạc Châu Á</Link></li>
                    <li><Link to='/nhacaumy'>Nhạc US-UK</Link></li>
                    <li><Link to='/nhackhongloi'>Nhạc Không Lời</Link></li>

                </ul>
        </div>
    )
}

export default Header
