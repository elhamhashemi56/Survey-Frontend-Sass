import React from 'react';
import './subHeader.scss' 
import hamburger from './images/hamburger.jpg'
import adminFoto from './images/admin-foto.jpg'

const SubHeader = (props) => {
    return (
        <div id={props.id} className='SubHeader-container'>
            <div className='SubHeader-container__hamber'><img src={hamburger}></img></div>
            <div className='SubHeader-container__Admin'>
                <div className='items'><img src={adminFoto}></img></div>
                <div className='items Admin-Name_Container'>
                    <div className='Admin_Name'>Juie Anderson</div>
                    <div className='Manager'>Manager</div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;