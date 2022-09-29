import './Home.css'
import React, { useEffect, useState } from 'react';

import proImg from '../../Images/blue--.png'


import Breaktime from '../Breaktime/Breaktime';
import Activity from '../Activity/Activity';

const Home = () => {

    const [activities,setActivities]=useState([]);
    const[saveTime,setsaveTime]=useState([]);
   

    useEffect(()=>{
        fetch('dataset.json')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setActivities(data)
            // console.log(data)
        })
    },[])

    // console.log("activities",activities)

    const handleAddTime=(time)=>{
       
           
            const saveTimeArray=[...saveTime,time];
            setsaveTime(saveTimeArray)

           
           
            

      
    }
   

    console.log("Save Time",saveTime)

    return (
        <div className='main-home-container'>

            <div className="title-logo-text">
                <div className="title-logo">
              
                 <h3>DAY-TO-DAY ROUTINE</h3>
                </div>
                <h3>
                  Select today’s Activitie's
                </h3>
            </div>
        <div className="home-container">
            <div className="left-side">
                {
                    activities.map((activity)=>{
                       return(
                        <Activity
                        activity={activity}
                        key={activity.id}
                        handleAddTime={handleAddTime}

                        ></Activity>
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
                  saveTime={saveTime}
                   ></Breaktime>
                </div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>
            
        </div>
    );
};

export default Home;