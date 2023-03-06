import React from 'react'
import Logo from '../img/logo.png'
const Footer = () => {
    return(
       <footer>
        <div className="container">
            <img src =  {Logo} alt = ""></img>
            <span>Made with dedication and react js  </span>
        </div>
       </footer>
    );
}

export default Footer;
