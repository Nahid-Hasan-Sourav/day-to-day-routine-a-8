import React, { useState } from "react";
import "./Breaktime.css";

const Breaktime = () => {
    const [storeTime,setStoreTime]=useState(0)
  const timeArray = [10, 20, 30,40,50];
  const takenTime =(e)=>{
    // console.log(e.target.innerText);
    setStoreTime(e.target.innerText.slice(0,2));
  }
  console.log(storeTime);
  return (
    <div className="break-time">
      <div className="break-time-text">
        <h2>Add A Break</h2>
      </div>
      <div className="break-circle-time">
        {/* <h5>20m</h5>
                <h5>30m</h5>
                <h5>40m</h5>
                <h5>50m</h5>
                <h5>60m</h5> */}
        {timeArray.map((t) => {
          return <h5
          onClick={takenTime}
          >{t}M</h5>;
        })}
      </div>
    </div>
  );
};

export default Breaktime;
