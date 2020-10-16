import React from 'react';
import './MainHeader.css';
import headerImg from '../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div className="container">
            <div className="row align-items-center justify-content-between headerMain">
                <div className="col-md-6 col-lg-5">
                    <h1 className="mb-3 heading" style={{fontSize:"35px"}}>Let's Grow Your<br/>Brand To The<br/> Next Level</h1>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda expedita veritatis quia, aliquid ea eaque maxime aspernatur laboriosam quibusdam debitis.</p>
                    <button className="btn btn-dark px-4">Hire us</button>
                </div>
                <div className="col-md-6 col-lg-6">
                    <img src={headerImg} width="100%" alt=""/>
                </div>
            </div> 
        </div>
    );
};

export default MainHeader;