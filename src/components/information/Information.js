import React from "react";
import Break from "../Break/Break";
import Personal from "../PersonalInfo/Personal";
import Profile from "../Profile/Profile";

import "./Information.css";


const Information = () => {
  return (
    <div className="info-card">
      <Profile></Profile>
      <Personal></Personal>
      <Break></Break>
    </div>
  );
};

export default Information;
