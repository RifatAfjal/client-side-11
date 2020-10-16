import React from 'react';
import './Header.css';
import Navigation from '../../Shared/Navigation/Navigation';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div className="headerContainer">
            <Navigation/>
            <MainHeader/>
        </div>
    );
};

export default Header;