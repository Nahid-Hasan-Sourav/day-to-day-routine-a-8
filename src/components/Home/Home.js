import './Home.css'
import React, { useEffect, useState } from 'react';
import logo from '../../Images/Barcelona(200x203) .png';
import proImg from '../../Images/blue--.png'
import Player from '../Player/Player';

import Breaktime from '../Breaktime/Breaktime';

const Home = () => {

    const [players,setPlayers]=useState([]);
    const[saveTime,setsaveTime]=useState([]);

    useEffect(()=>{
        fetch('dataset.json')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setPlayers(data)
            console.log(data)
        })
    },[])

    console.log("PLayers",players)

    const handleAddTime=(time)=>{
        return(
            console.log(time)
            
        )
    }

    return (
        <div className='main-home-container'>

            <div className="title-logo-text">
                <div className="title-logo">
                <img src={logo} alt="logo" className="logo" />
                 <h3>Barcelona Activities Club</h3>
                </div>
                <h3>
                  Select today’s exercise
                </h3>
            </div>
        <div className="home-container">
            <div className="left-side">
                {
                    players.map((player)=>{
                       return(
                        <Player 
                        player={player}
                        key={player.id}
                        handleAddTime={handleAddTime}
                        ></Player>
                       )
                    })
                }
              
            </div>

            <div className="right-side">
                <div className="profile">
                   <img src={proImg} alt='profile' className='profile-image'/>
                   <h2>Nahid Hasan Sourav</h2>
                   <h4>Web Devloper</h4>
                </div>
                <div className="add-a-break">
                   <Breaktime 
                  
                   ></Breaktime>
                </div>
                <button>Activity Completed</button>
            </div>
        </div>
            
        </div>
    );
};

export default Home;