import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/Fakedb";
import Exercisedetails from "../ExcerciseDetails/Exercisedetails";
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
                  <h5 onClick={takenTime}>10M</h5>
                  <h5 onClick={takenTime}>20M</h5>
                  <h5 onClick={takenTime}>30M</h5>
                  <h5 onClick={takenTime}>40M</h5>
                  <h5 onClick={takenTime}>50M</h5>
                    {/* {timeArray.map((t,id) => {
                      return <h5
                      onClick={takenTime} key={id}
                      >{t}M</h5>;
                    })} */}
                  </div>
              </div>
              <div>
                <Exercisedetails
               
               breakTime={breakTime}
               saveTime={saveTime}
                >

                </Exercisedetails>
              </div>

    </div>
  );
};

export default Breaktime;
