import './Home.css'
import React, { useEffect, useState } from 'react';
import logo from '../../ImagesBarcelona(200x203) .png';
import Player from '../Player/Player';

const Home = () => {

    const [players,setPlayers]=useState([]);

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
                        ></Player>
                       )
                    })
                }
              
            </div>

            <div className="right-side">
                <div className="profile">
                    <img></img>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Home;