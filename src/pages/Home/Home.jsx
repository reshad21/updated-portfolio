import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import WorkDetails from '../WorkDetails/WorkDetails';

const Home = () => {
    return (
        <>
            <Banner />
            <WorkDetails />
            <About />
        </>
    );
};

export default Home;