import React from "react";
import "./Details.css";

const Details = ({time, minute}) => {
  // console.log(props)
  // const {time} = props;
  let totalTime = 0;
  for(let activity of time){
    totalTime = totalTime + activity.time;
  }
  return (
    <div>
      <h5>Activities Details</h5>
      <div className="activity-time">
        <p>Activities time: </p>
        <p>
          <span>{totalTime}</span>minutes
        </p>
      </div>
      <div className="break-time">
        <p>Break time: </p>
        <p>
          <span>{minute}</span>minutes
        </p>
      </div>
      <div className="completed">
        <button>Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
