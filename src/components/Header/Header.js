import React from 'react'
import './Header.css';
import Logo from '../../img/logo-small.png';

const Header = () => {
    return (
        <header>

            <div>
                <img src={Logo} alt="logo"/>
            </div>
        </header>
    )
}

export default Header;
