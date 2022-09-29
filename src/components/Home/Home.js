import './Home.css'
import React, { useEffect, useState } from 'react';
import logo from '../../Images/logoDaily.png'
import proImg from '../../Images/blue--.png'
import Breaktime from '../Breaktime/Breaktime';
import Activity from '../Activity/Activity';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   const showToast =(e)=>{
    
   
    if(saveTime.length<=0){
        toast("Please Select Any Activity!!");
    }
    else{
        toast("Activity Completed Successfully!!");
        e.target.style.backgroundColor="red"
    }
   }

    console.log("Save Time",saveTime)

    return (
        <div>

<div className='main-home-container'>
           
           <div className="home-container">
               <div className="left-sides">
               <div className="title-logo-text">
                   <div className="title-logo">
                   <img src={logo} className='logo' alt='logo'/>
                    <h3>DAY-TO-DAY ROUTINE</h3>
                   </div>
                   <h3>
                     Select today’s Activitie's
                   </h3>
               </div>
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
               </div>
               
   
               <div className="right-side">
                   <div className="profile">
                      <img src={proImg} alt='profile' className='profile-image'/>
                      <h4>Nahid Hasan Sourav</h4>
                      <h5>Web Devloper</h5>
                      <h6>Dhaka,Bangladesh</h6>
                   </div>
                   <div className="add-a-break">
                      <Breaktime 
                     saveTime={saveTime}
                      ></Breaktime>
                   </div>
                   <button className='activity-btn' onClick={showToast}>Activity Completed</button>
                   <ToastContainer/>
               </div>
           </div>
               
           </div>

        </div>
    );
};

export default Home;