import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./eventsdisplay.scss";

const EventDisplay = () => {
  // State to store the list of events
  const [events, setEvents] = useState([]);

  // Function to format dates
  const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters
    const url = `http://localhost:4000/events?limit=3&attributes=id,title,image,description,startdate,stopdate,duration_minutes,price`;

    // Function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        // Set the retrieved data in the state
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function to fetch data
    getData();
  }, [setEvents]);

  return (
    <>
      <div className="eventsbox">
        {events &&
          events.map((data) => {
            console.log(data);
            return (
              <figure key={data.id}>
                <div className="imgbox">
                  <img
                    src={`http://localhost:4000/Assets/Images/events/small/${data.image}`}
                    alt={data.title}
                  />
                </div>
                <figcaption>
                  <p>{data.stage.name}</p>
                  <p>
                    {formatDate(data.startdate)} - {formatDate(data.stopdate)}
                  </p>
                  <hr />

                  <h2>{data.title}</h2>
                  <div className="buttons">
                    <button className="button1">
                      <Link to={`/forestillinger&events/${data.id}`}>
                        LÆS MERE
                      </Link>
                    </button>
                    <button className="button2">
                      <Link to={`/forestillinger&events/${data.id}`}>KØB</Link>
                    </button>
                  </div>
                </figcaption>
              </figure>
            );
          })}
      </div>
      <div className="allEvents">
        <button>SE ALLE FORESTILLINGER</button>
      </div>
    </>
  );
};

export default EventDisplay;
