import React from 'react';
import web from '../src/images/img1.svg';
import './App.css';
import Common from './Common';


const Home = () =>{
    return(
        <>
            <Common name=" Grow Your Business with " imgsrc={web} visit="/service" btn_name="Get Started" />
        </>
    )
}

export default Home;