import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/Fakedb";
import Activitydetails from "../ActivityDetails/Activitydetails";
import "./Breaktime.css";

const Breaktime = ({saveTime}) => {
  // const [storeTime,setStoreTime]=useState(0)
  // const timeArray = [10, 20, 30,40,50];
  const [breakTime,setbreakTime]=useState(0)
  const takenTime =(e)=>{
    // console.log(e.target.innerText);
    // setStoreTime(e.target.innerText.slice(0,2));
    // e.target.style.backgroundColor = "orange"
    // setTimeout(() => {
    //   e.target.style.backgroundColor='white'
    // }, 100);
    const breakTimes=e.target.innerText.slice(0,2)
    setbreakTime(breakTimes)
    addToDb(breakTimes)
   


  }

  useEffect(()=>{

    let getData=localStorage.getItem('Time');
    getData=JSON.parse(getData);
    console.log("Get Data : ",getData);
    setbreakTime(getData);
  },[])

  // console.log('Break Times',breakTime)

  // console.log(storeTime);
  // console.log(typeof storeTime);
  return (
    <div className="break-time-container">

            <div className="break-time">
                  <div className="break-time-text">
                    <h2>Add A Break</h2>
                  </div>
                  <div className="break-circle-time">
                  <p onClick={takenTime}>10M</p>
                  <p onClick={takenTime}>20M</p>
                  <p onClick={takenTime}>30M</p>
                  <p onClick={takenTime}>40M</p>
                  <p onClick={takenTime}>50M</p>
                    {/* {timeArray.map((t,id) => {
                      return <h5
                      onClick={takenTime} key={id}
                      >{t}M</h5>;
                    })} */}
                  </div>
              </div>
              <div>
                <Activitydetails
               
               breakTime={breakTime}
               saveTime={saveTime}
                >

                </Activitydetails>
              </div>

    </div>
  );
};

export default Breaktime;
