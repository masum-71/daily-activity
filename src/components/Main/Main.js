import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
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
          <h1>this is secondary section</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
