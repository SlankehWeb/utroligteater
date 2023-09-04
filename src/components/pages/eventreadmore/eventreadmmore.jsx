import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventReadMore = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/events/${id}`;

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
  }, [id, setEvents]); 

  return (
 
    <div className="eventsCards">
      {events.map((data) => (
        <figure className="eventsCard" key={data.id}>
          <img src={`http://localhost:4000/Assets/Images/events/small/${data.image}`} alt="img" />
          <p>{data.startdate}-{data.stopdate}</p>
          <h2>{data.title}</h2>
        </figure>
      ))}
    </div>
  );
};

export default EventReadMore;