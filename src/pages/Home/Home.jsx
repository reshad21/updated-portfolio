import React from 'react';
import Banner from '../Banner/Banner';
import About from './../About/About';
import WorkDetails from './../WorkDetails/WorkDetails';

const Home = () => {
    return (
        <>
            <Banner />
            <WorkDetails />
            <About />
            {/* <Portfolio /> */}
            {/* <Servicess /> */}
            {/* <Blog /> */}
            {/* <Contact /> */}
        </>
    );
};

export default Home;