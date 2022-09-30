import React from 'react';
import icon from '../../images/code.png'
import './Header2.css'

const Header2 = () => {
    return (
        <div className='title-cntlr-phone'>
            <div className='d-flex align-items-center mb-4'>
                <img src={icon} alt="" /> 
                <h2 className='mt-2 ms-3 text-info'>Do Code!</h2>
                <br />
            </div>
            <h4>Best Tranding Courses:</h4>
        </div>
    );
};

export default Header2;