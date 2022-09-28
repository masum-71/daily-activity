import React from "react";
import Break from "../Break/Break";
import Details from "../Details/Details";
import Personal from "../PersonalInfo/Personal";
import Profile from "../Profile/Profile";

import "./Information.css";


const Information = ({time}) => {
 
  
  return (
    <div className="info-card">
      <Profile></Profile>
      <Personal ></Personal>
      <Break></Break>
      <Details time={time}></Details>
    </div>
  );
};

export default Information;
