import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/css/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--container">
                <NavLink className="footer--container--item" to="/contact">Kontakt</NavLink>
                |
                <NavLink className="footer--container--item" to="/imprint">Impressum</NavLink>
                |
                <NavLink className="footer--container--item" to="/data">Datenschutz</NavLink>
            </div>
        </div>
    );
};

export default Footer;