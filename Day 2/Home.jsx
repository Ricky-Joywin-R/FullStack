import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/Wedding-Event.jpg'; // Import your images
import image2 from '../../assets/images/Birthday-Event.jpg';
// Import other images if needed
import '../../assets/css/home.css';

const Home = () => {
  return (
    <div className='home_box'>
    <div className='box1'>
    <div className='desc'>
    <h1>Welcome to EventHub: Your Ultimate Event Planning Platform</h1>
    <p>Are you ready to transform your events from ordinary to extraordinary? Look no further than EventHub, 
    your one-stop destination for seamless event planning. 
    Whether you're organizing a corporate conference, a wedding, a birthday bash, 
    or a community fundraiser, EventHub has you covered.</p>
    </div>
    </div>
    </div>
  );
};



export default Home;
