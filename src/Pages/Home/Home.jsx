import React from 'react';
import Intro from '../../Components/Intro/Intro';
import useTitle from '../../hooks/useTitle';
import About from '../../Components/About/About';
import Product from '../../Components/Product/Product';
import ProductList from '../../Components/ProductList/ProductList';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <ProductList></ProductList>
        </div>
    );
};

export default Home;