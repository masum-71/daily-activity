import React, { useState } from "react";
import Break from "../Break/Break";
import Details from "../Details/Details";
import Personal from "../PersonalInfo/Personal";
import Profile from "../Profile/Profile";

import "./Information.css";


const Information = ({time}) => {

  const [minute, setMinute] = useState(0)
 
  const breakTime = (minutes) => {
  console.log(minutes)
  setMinute(minutes)
 }
  
  return (
    <div className="info-card">
      <Profile></Profile>
      <Personal ></Personal>
      <Break breakTime={breakTime}></Break>
      <Details time={time}
      minute = {minute}
      ></Details>
    </div>
  );
};

export default Information;
