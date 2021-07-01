import React from 'react';
import './header.scss'
import Logo from './images/logo.jpg'

const Header = (props) => {
    return (
        <div id={props.id} className='Header-Container'>
            <div className='Header-Container__img'><img src={Logo}></img></div>
            <div className='Header-Container__Logout'> 
                <div className='items'>LOG OUT</div>
                <i class="fas fa-user-circle user-logout"></i>
            </div>
           
        </div>
    );
};

export default Header;