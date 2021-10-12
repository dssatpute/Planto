import React from 'react';
import Header from './Header';
import Imageslider from './ImageSlider';
import Bestselling from './BestSelling';

const Landing = () => {
    return (
        <div>
            <Header/>
            <Imageslider/>
            <Bestselling/>
        </div>
    );
}

export default Landing;
