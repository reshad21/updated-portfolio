import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import WorkDetails from '../WorkDetails/WorkDetails';

const Home = () => {
    return (
        <>
            <Banner />
            <WorkDetails />
            <About />
            <Portfolio />
        </>
    );
};

export default Home;