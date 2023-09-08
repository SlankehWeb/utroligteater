import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./eventslist.scss";

const Events = () => {
  // Initialize the events state using the useState hook
  const [events, setEvents] = useState([]);

  // Function to format a date
  const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const url = `http://localhost:4000/events?attributes=id,title,image,description,startdate,stopdate,duration_minutes,price`;

    // Async function to fetch data from the API
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Update the events state with the fetched data
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the getData function when the component mounts
    getData();
  }, [setEvents]); // useEffect depends on setEvents

  return (
    <div className="eventsCards">
      {/* Map over the events array and render event cards */}
      {events.map((data) => (
        <figure className="eventsCard" key={data.id}>
          <img
            rel="preload"
            fetchpriority="high"
            as="image"
            src={`http://localhost:4000/Assets/Images/events/small/${data.image}`}
            alt="img"
          />
          <div className="h2parent">
            <h2>{data.title}</h2>
          </div>
          <div className="stageanddate">
            <p>{data.stage.name}</p>
            <p className="date">
              {formatDate(data.startdate)} - {formatDate(data.stopdate)}
            </p>
          </div>
          <div className="button1">
            {/* Link to read more about the event */}
            <Link to={`/forestillinger&events/${data.id}`}>
              <button>LÆS MERE</button>
            </Link>
          </div>
          <div className="button2">
            {/* Link to buy tickets for the event */}
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
