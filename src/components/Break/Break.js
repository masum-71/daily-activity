import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div>
            <h5>Add A Break</h5>
            <div className='btn-container'>
                <button className='btn-break'><span>10</span>m</button>
                <button className='btn-break'><span>20</span>m</button>
                <button className='btn-break'><span>30</span>m</button>
                <button className='btn-break'><span>40</span>m</button>
            </div>
        </div>
    );
};

export default Break;