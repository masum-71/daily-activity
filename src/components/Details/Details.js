import React from "react";
import "./Details.css";

const Details = (props) => {
  const {time} = props;
  console.log(time)

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
          <span>00</span>minutes
        </p>
      </div>
      <div className="completed">
        <button>Activity Completed</button>
      </div>
    </div>
  );
};

export default Details;
