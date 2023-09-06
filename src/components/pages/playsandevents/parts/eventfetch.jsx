import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./eventslist.scss";

const Events = () => {
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
          <div className="h2parent">
          <h2>{data.title}</h2>
          </div>
          <div className="stageanddate">
          <p >{data.stage.name}</p>
          <p className="date">{data.startdate}-{data.stopdate}</p>
          </div>
          <div className="button1">
          <Link to={`/forestillinger&events/${data.id}`}>
            <button>LÆS MERE</button>
          </Link>
          </div>
          <div className="button2">
          <Link to={`/forestillinger&events/${data.id}`}>
            <button>KØB BILLET</button>
          </Link>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default Events;
