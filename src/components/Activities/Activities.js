
import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const {img, name, description, time} = props.activity;
    return (
        <div className='card'>
            <div className='activity'>
               <img src={img} alt="activity images" />
               <h4 className='name'>{name}</h4>
               <p className='description'>{description}</p>
               <h4 className='time'>Time Required: {time}m</h4>
            </div>
            <div className='btn'>
            <button className='add-btn'>Add to list</button>
            </div>
        </div>
    );
};

export default Activities;