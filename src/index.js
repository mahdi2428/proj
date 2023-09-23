import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './page/Register';
import Navbar from './page/navbar';
import Slide from './component/slide';
import Header1 from './page/Header1';
import Cards from './page/cards';
import Body from './page/Body';
import Footer from './page/Footer';
import Contact from './page/Contact';
import Box from './component/Box';
import Image from './page/image';
import Test from './page/Test';
import CircleImages from './component/Circle-images';
import ExpandingCards from './component/expanding-cards';
import Slider from './component/slider';
import Button from './component/butten';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Router>
      <Register/>
    </Router> */}
    <div className='root1'>
    <Router>
      <Navbar />
      <Slider />
      <Button />
      <Body/>

      {/* <Slide/>  */}
      <Cards />
        {/* <Test/> */}
      
      
      
      <Image /><ExpandingCards />
      <Contact />
      <Footer/>
      </Router>
    {/* <Router></Router> */}
    </div>
  </React.StrictMode>
);

