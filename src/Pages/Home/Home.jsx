import React, { useContext } from 'react';
import Intro from '../../Components/Intro/Intro';
import useTitle from '../../hooks/useTitle';
import About from '../../Components/About/About';
import Product from '../../Components/Product/Product';
import ProductList from '../../Components/ProductList/ProductList';
import Toggle from '../../Components/Toggle/Toggle';
import Contact from '../../Components/Contact/Contact';
import { ThemeContext } from "../../context";
import Skills from '../../Components/Skills/Skills';


const Home = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    useTitle('Home')
    return (
        <div style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
          }}
        >
            <Toggle></Toggle>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <ProductList></ProductList>
            <Contact></Contact>
        </div>
    );
};

export default Home;