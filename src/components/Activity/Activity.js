/* eslint-disable no-undef */
import React from 'react';
import './Activity.css'

const Activity = ({activity,handleAddTime}) => {
    // console.log("props",activity);
    const{image,name,practiceTime,Description,
    }=activity;
    return (
        <div className='player-cart'>
            <img src={image}  className='player-img' alt='Player'/>
            <div className="cart-info">
                <h3 className='player-name'>{name}</h3>
                <p className='player-details'>{Description.slice(0,170)}...{
                    <span className='read-more'>
                    Read More
                   </span>
                }
               
                </p>
                
                <h5 className='player-practice-time'>Time required : {practiceTime} Hour</h5>
            </div>
            <button className='player-btn'onClick={(e)=>handleAddTime(practiceTime,e.target.innerText="Added",e.target.style.backgroundColor="#0c7075")}>Add To List</button>
        </div>
    );
};

export default Activity;