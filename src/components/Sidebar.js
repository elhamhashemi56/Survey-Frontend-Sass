import React from 'react';
import './sidebar.scss'
import Navbar from './Navbar'
import Footer from './Footer'

const Sidebar = (props) => {
    return (
        <div id={props.id} className='sidebar_Container'>
            <Navbar />
            <Footer />
        </div>
    );
}; 

export default Sidebar;