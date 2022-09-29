import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Details.css";

const Details = ({time, minute}) => {
  

  const notify = () => toast("Congratulation you have done!");
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
        <button onClick={notify}>Activity Completed</button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Details;
