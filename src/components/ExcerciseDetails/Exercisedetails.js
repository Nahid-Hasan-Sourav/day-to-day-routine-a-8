import React from 'react';
import './Exercisedetails.css'


const Exercisedetails = ({breakTime,saveTime}) => {
console.log("This is saved time :",saveTime)
    
   let total=0;
    saveTime?.map((time) =>{
        return(
            total=total+Number(time) 
        )
    })
    console.log("Total time :",total);

    return (
        <div className='excercise-time-container'>
            <div className="exercise-text">
               <h2>Exercise Details</h2>
            </div>
           
            <div className="break-times">
                <h6>Exercise time</h6>
                <p>{total} Hours</p>
            </div>
            <div className="break-times">
                <h6> Break time</h6>
                <p>{breakTime} Minute</p>
            </div>
        </div>
    );
};

export default Exercisedetails;