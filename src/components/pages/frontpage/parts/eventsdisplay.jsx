import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./eventsdisplay.scss";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };
  useEffect(() => {
    const url = `http://localhost:4000/events?limit=3&attributes=id,title,image,description,startdate,stopdate,duration_minutes,price`;

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
                    {formatDate(data.startdate)} -{formatDate(data.stopdate)}
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
