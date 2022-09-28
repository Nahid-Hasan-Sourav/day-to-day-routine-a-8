/* eslint-disable no-undef */
import React from 'react';
import './Player.css'

const Player = ({player,handleAddTime}) => {
    console.log("props",player);
    const{image,name,age,practiceTime,Description,
    }=player;
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
                <h5 className='player-age'>Age : {age} Years</h5>
                <h5 className='player-practice-time'>Time required : {practiceTime}</h5>
            </div>
            <button className='player-btn'onClick={(e)=>handleAddTime(practiceTime,e.target.innerText="Added")}>Add To List</button>
        </div>
    );
};

export default Player;