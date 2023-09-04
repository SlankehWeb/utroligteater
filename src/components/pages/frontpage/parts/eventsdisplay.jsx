import React, { useEffect, useState } from "react";
import axios from "axios";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/events`;

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
          <img src={`http://localhost:4000/events/${data.image}`} alt="img" />
          <h2>{data.title}</h2>
        </figure>
      ))}
    </div>
  );
};

export default EventDisplay;
