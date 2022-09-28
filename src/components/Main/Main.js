import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import Information from "../information/Information";
import './Main.css'

const Main = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
  return (
    <div>
      <h3>Todays Activities</h3>
      <div className="main">
        <div className="activities">
            {
                activities.map(activity => <Activities
                activity = {activity}
                ></Activities>)
            }
          
        </div>
        <div>
          <Information></Information>
        </div>
      </div>
    </div>
  );
};

export default Main;
