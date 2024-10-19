import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/css/header.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink className="header--item" to="/" >Ingrid<span className='header--item--surname'>Lindemann</span></NavLink>
        </div>
    );
};

export default Header;