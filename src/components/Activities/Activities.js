
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Activities.css'

const Activities = ({addTime, activity}) => {
    const {img, name, description, time} = activity;
    return (
        <div className='card'>
            <div className='activity'>
               <img src={img} alt="activity images" />
               <h4 className='name'>{name}</h4>
               <p className='description'>{description}</p>
               <h4 className='time'>Time Required: {time}m</h4>
            </div>
            <div className='btn'>
            <button onClick={() => addTime(activity)} className='add-btn'><p>Add to list</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Activities;