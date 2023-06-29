import React from 'react';
import Intro from '../../Components/Intro/Intro';
import useTitle from '../../hooks/useTitle';
import About from '../../Components/About/About';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Intro></Intro>
            <About></About>
        </div>
    );
};

export default Home;