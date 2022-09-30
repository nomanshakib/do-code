import React from 'react';
import './GridItem.css';

const GridItem = ({language,getTime}) => {
    const {img,name,timeRequired} = language;
    return (
        
        <div className="card">
            <img src={img} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Duration: {timeRequired}h</p>
                <button onClick={() => getTime(timeRequired)} className="btn btn-info w-100 add-btn">Select</button>
            </div>
        </div>
    );
};

export default GridItem;