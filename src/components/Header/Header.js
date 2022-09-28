

import React from 'react';
import logo from '../../logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <h1>My Daily Activity</h1>
        </div>
    );
};

export default Header;