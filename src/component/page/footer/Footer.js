import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
        <div className='contact'>
        <div className='logo'>
            <h2>Nhạc của Lộc</h2>
        </div>
        <ul>
            <li>
                <a href='https://www.facebook.com/loc120299/'><i className="fab fa-facebook-f"/></a>
            </li>  <li>
                <a href='https://www.instagram.com/nguyenloc120299/'><i className="fab fa-instagram"/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/nguyenloc120299/"><i className="far fa-envelope"/></a>
            </li>
        </ul>
        </div>
       <div className='footer-copy'>
           <p>2021 &copy; Nguyen Thanh Loc </p>
       </div>
    </div>
    )
}

export default Footer
