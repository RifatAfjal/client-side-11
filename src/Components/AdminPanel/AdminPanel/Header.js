import React from 'react';

const Header = ({title, image, name}) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-white" style={{marginBottom:"30px"}}>
                <h5>{title}</h5>
                <div className="d-flex align-items-center">
                    <img src={image} width="50px" height="50px" className="mr-3 rounded-circle" alt=""/>
                    <span>{name}</span>
                </div>
            </div>
        </>
    );
};

export default Header;