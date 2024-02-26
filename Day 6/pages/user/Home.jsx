import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/Wedding-Event.jpg'; // Import your images
import image2 from '../../assets/images/Birthday-Event.jpg';
// Import other images if needed
import '../../assets/css/home.css';
import Event_Home from '../../assets/images/home_event.jpg';
import Event_Wedding from '../../assets/images/home_wedding.jpg'

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
    <button type='submit'>SIGNUP FOR FREE</button>
    </div>
    <div className="image">
    <img src={Event_Home}/>
    </div>
    </div>
    <div className='box1'>
    <div className='desc'>
    <h1>Wedding Planner</h1>
    <p>Welcome to our Event Management App's Wedding Planner feature – your ultimate tool for orchestrating the perfect celebration of love and union. 
    With meticulous attention to detail and seamless organization at its core, our Wedding Planner empowers you to transform your dream wedding into a breathtaking reality. 
    From venue selection to vendor coordination, guest management to budget tracking, embark on your journey to 'I do' with confidence, supported by our intuitive and comprehensive planning platform. 
    </p>
    <button type='submit'>WEDDING EVENT</button>
    </div>
    <div className="image">
    <img src={Event_Wedding}/>
    </div>
    </div>
    <div className='box1'>
    <div className='desc'>
    <h1>Wedding Planner</h1>
    <p>Welcome to our Event Management App's Wedding Planner feature – your ultimate tool for orchestrating the perfect celebration of love and union. 
    With meticulous attention to detail and seamless organization at its core, our Wedding Planner empowers you to transform your dream wedding into a breathtaking reality. 
    From venue selection to vendor coordination, guest management to budget tracking, embark on your journey to 'I do' with confidence, supported by our intuitive and comprehensive planning platform. 
    </p>
    <button type='submit'>WEDDING EVENT</button>
    </div>
    <div className="image">
    <img src={Event_Wedding}/>
    </div>
    </div>
    </div>
  );
};



export default Home;
