import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ActorsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/actors?attributes=id,description,image,name`;

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
    <div className="actorsCards">
      {events.map((data) => (
        <figure className="Card" key={data.id}>
              <img src={`http://localhost:4000/Assets/Images/actors/${data.image}`} alt="img" />
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <Link to={`/skuespillere/${data.id}`}>
            <button>læs mere</button>
          </Link>
        </figure>
      ))}
    </div>
  );
};

export default ActorsList;
