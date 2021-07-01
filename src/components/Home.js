import React from 'react';
import './home.scss'
import Bild from './images/chart.jpg'

const Home = () => {
    return (
        <div className='Home-Container'>
            <h1>Welcome to Survey APP</h1>
            <img src={Bild} className='Home-Container__img'></img>
            <img src={Bild} className='Home-Container__img'></img>
        </div>
    );
};

export default Home;