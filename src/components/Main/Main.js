import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import Blog from "../Blog/Blog";
import Information from "../information/Information";
import "./Main.css";

const Main = () => {
  const [activities, setActivities] = useState([]);

  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addTime = (activity) => {
    const totalTime = [...time, activity]
    setTime(totalTime)
    
  }
  return (
    <div>
      <h3>Todays Activities</h3>
      <div className="main">
        <div className="activities">
          {activities.map((activity) => (
            <Activities activity={activity}
             key={activity.id}
             addTime = {addTime}
             ></Activities>
          ))}
        </div>
        <div>
          <Information time={time}></Information>
        </div>
      </div>
      <Blog></Blog>
    </div>
  );
};

export default Main;
