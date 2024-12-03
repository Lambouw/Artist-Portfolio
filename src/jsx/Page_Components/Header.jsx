import React, { useEffect, useRef } from 'react';
import { NavLink, useFetcher } from 'react-router-dom';

import '../../styles/css/header.css'

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        headerRef.current.classList.add("slide-in-header");
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <NavLink className="header--item" to="/" >Ingrid<span className='header--item--surname'>Lindemann</span></NavLink>
        </div>
    );
};

export default Header;