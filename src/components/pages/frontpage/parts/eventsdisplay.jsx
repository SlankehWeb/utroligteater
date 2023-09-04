import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const EventDisplay = () => {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const url = `http://localhost:4000/events?attributes=id,title,image,description,startdate,stopdate,duration_minutes,price`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

 
    getData();
  }, [setEvents]); 

  return (
 
    <div className="eventsCards">
      {events.map((data) => (
        <figure className="eventsCard" key={data.id}>
          <img src={`http://localhost:4000/Assets/Images/events/small/${data.image}`} alt="img" />
          <p>{data.startdate}-{data.stopdate}</p>
          <h2>{data.title}</h2>
          <Link >
          <button>læs mere</button>
          </Link>
        </figure>
      ))}
    </div>
  );
};

export default EventDisplay;
