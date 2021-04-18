import React from 'react';
import './Header.css';
import ContentHome from '../ContentHome/ContentHome';

import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-content">
            <Navbar></Navbar>
           <ContentHome></ContentHome>
        </div>
    );
};

export default Header;