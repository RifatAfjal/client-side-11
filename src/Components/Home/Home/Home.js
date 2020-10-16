import React from 'react';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header/>
            <Brands/>
            <Services/>
            <Works/>
            <Feedback/>
            <Contact/>
        </div>
    );
};

export default Home;