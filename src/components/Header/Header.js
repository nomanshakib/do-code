import React from 'react';
import icon from '../../images/code.png'
const Header = () => {
    return (
        <div className='title-cntlr-desk'>
            <div className='d-flex align-items-center mb-4'>
                <img src={icon} alt="" /> 
                <h2 className='mt-2 ms-3 text-primary'>Do Code!</h2>
                <br />
            </div>
            <h4>Select Your One:</h4>
        </div>
    );
};

export default Header;