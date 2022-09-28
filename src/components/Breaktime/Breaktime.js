import React, { useState } from "react";
import Exercisedetails from "../ExcerciseDetails/Exercisedetails";
import "./Breaktime.css";

const Breaktime = () => {
    const [storeTime,setStoreTime]=useState(0)
  const timeArray = [10, 20, 30,40,50];
  const takenTime =(e)=>{
    // console.log(e.target.innerText);
    setStoreTime(e.target.innerText.slice(0,2));
  }
  console.log(storeTime);
  console.log(typeof storeTime);
  return (
    <div className="break-time-container">

            <div className="break-time">
                  <div className="break-time-text">
                    <h2>Add A Break</h2>
                  </div>
                  <div className="break-circle-time">

                    {timeArray.map((t,id) => {
                      return <h5
                      onClick={takenTime} key={id}
                      >{t}M</h5>;
                    })}
                  </div>
              </div>
              <div>
                <Exercisedetails
                storeTime={storeTime}
                >

                </Exercisedetails>
              </div>

    </div>
  );
};

export default Breaktime;
