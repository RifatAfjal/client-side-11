import React from 'react';
import './Brands.css';
import brand1 from '../../../images/logos/slack.png';
import brand2 from '../../../images/logos/google.png';
import brand3 from '../../../images/logos/uber.png';
import brand4 from '../../../images/logos/netflix.png';
import brand5 from '../../../images/logos/airbnb.png';



const Brands = () => {
    return (
        <div style={{marginBottom:"100px"}} >
            <div className="container">
                <div className="d-flex justify-content-around align-items-center flex-wrap brandsImg">
                    <img src={brand1} alt=""/>
                    <img src={brand2} alt=""/>
                    <img src={brand3} alt=""/>
                    <img src={brand4} alt=""/>
                    <img src={brand5} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Brands;