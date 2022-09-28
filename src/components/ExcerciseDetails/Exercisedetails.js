import React from 'react';
import './Exercisedetails.css'


const Exercisedetails = ({storeTime}) => {
    return (
        <div className='excercise-time-container'>
            <div className="exercise-text">
               <h2>Exercise Details</h2>
            </div>
           
            <div className="break-times">
                <h6>Exercise time</h6>
                <p>200 Seconds</p>
            </div>
            <div className="break-times">
                <h6> Break time</h6>
                <p>{storeTime} M</p>
            </div>
        </div>
    );
};

export default Exercisedetails;