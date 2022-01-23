import React from 'react';
import web from '../src/images/img2.svg';
import Common from './Common';


const About = () =>{
    return(
        <>
            <Common name=" Welcome to " imgsrc={web} visit="/contact" btn_name="Contact Us" />
        </>
    )
}

export default About;