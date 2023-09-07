import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hero.scss";

const Hero = () => {
  const [events, setEvents] = useState([]);
    const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };
  useEffect(() => {
    const url = `http://localhost:4000/events?attributes=id%2Ctitle%2Cimage%2Cstartdate%2Cstopdate&limit=1`;

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
 
    <div >
      {events.map((data) => (
        <figure className="heroCard" key={data.id}>
          <img src={require('./Fyrtøjet.png')} alt="img" />
          <h2>{data.title}</h2>
          <div className="stagename">
          <p>{data.stage.name}</p>
          <p className="dates">{formatDate(data.startdate)} -{formatDate(data.stopdate)}</p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default Hero;
