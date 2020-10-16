import React from 'react';
import './Works.css';
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import "../../../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-4.png';
import work4 from '../../../images/carousel-5.png';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const Works = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="workContainer">
            <div className="container">
                <SectionHeader
                   heading ="Here are some of"
                   highlightHeading="our works"
                   color="white"
                />
                  
            <Slider {...settings}>
                <div className="p-3">
                    <img src={work1} width="100%" alt="" />
                </div>
                <div className="p-3">
                    <img src={work2} width="100%" alt=""/>
                </div>
                <div className="p-3">
                    <img src={work3} width="100%" alt=""/>
                </div>
                <div className="p-3">
                    <img src={work4} width="100%" alt=""/>
                </div>
            </Slider>
        </div>
        </div>
    );
};

export default Works;
