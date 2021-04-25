import React from 'react';
import './Header.css';
const Header = ({ logoUrl })=>{

    //console.log(logoUrl)
    return (
      <header>
        <img src={logoUrl} />
      </header>
    );

}


export default Header;