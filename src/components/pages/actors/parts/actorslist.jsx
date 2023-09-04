import React, { useEffect, useState } from "react";
import axios from "axios";

const ActorsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/actors`;

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
          <h2>{data.name}</h2>
        </figure>
      ))}
    </div>
  );
};

export default ActorsList;
