

import React from 'react';
import profile from "../../279464173_5230209380355479_8921043889117958017_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <div>
            <div className="profile">
          <img src={profile} alt="" />
        </div>
        <div className="name-location">
          <h5>Masum Billah</h5>
          <div className="location">
            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
            <p>Bhola, Bangladesh</p>
          </div>
        </div>
        </div>
    );
};

export default Profile;