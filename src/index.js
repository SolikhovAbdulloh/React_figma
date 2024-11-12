import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/navbar';
import Header from './component/header';
import Category from './component/category';
import Cards from './component/cards';
import Section from './component/section';
import Footer from './component/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Category/>
    <Cards/>
    <Section/>
    <Footer/>
  </React.StrictMode>
);

