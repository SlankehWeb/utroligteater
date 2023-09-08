import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./eventreadmore.scss";

const EventReadMore = () => {
  // State to store event data fetched from the server
  const [data, setData] = useState([]);
  
  // Get the 'id' parameter from the URL using React Router
  const { id } = useParams();

  // Function to format a date in a specific way
  const formatDate = (dateNew) => {
    const date = new Date(dateNew);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("da-DK", options);
  };

  // Fetch event data from the server when the 'id' parameter changes
  useEffect(() => {
    const url = `http://localhost:4000/events/${id}`;
    
    // Function to fetch data asynchronously
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData(); // Call the getData function when the 'id' parameter changes
  }, [id]); // This effect will run whenever 'id' changes

  return (
    <>
      {data && (
        <figure className="readCard" key={data.id}>
          <div className="img1">
            <img
              src={`http://localhost:4000/Assets/Images/events/medium/${data.image}`}
              alt="img"
            />
          </div>
          <div className="dateprice">
            <div className="readmoredate">
              <p className="s1">{data.stage.name}</p>
              <p className="s2">
                {formatDate(data.startdate)} -{formatDate(data.stopdate)}
              </p>
            </div>
            <p className="readmoreprice">BILLETPRIS:{data.price} DKK</p>
          </div>
          <hr />
          <div className="titlebutton">
            <div className="titlename">
              <h2>{data.title}</h2>
              <p>{data.genre.name}</p>
            </div>
            <div className="buttonreadmore">
              <Link to={`/forestillinger&events/${data.id}`}>
                <button>KØB BILLET</button>
              </Link>
            </div>
          </div>
          <div className="desclength">
            <p>{data.description}</p>
            <p>Varighed ca. {data.duration_minutes}min</p>
          </div>
          <h2 className="h2m">MEDVIRKENDE</h2>
          <div className="card-container">
            {data.actors &&
              data.actors.map((actor) => {
                return (
                  <div key={actor.id} className="actiondiv">
                    <figure className="actorfig">
                      <img
                        src={`http://localhost:4000/Assets/Images/actors/${actor.image}`}
                        alt="actor"
                      />
                      <p>{actor.name}</p>
                    </figure>
                  </div>
                );
              })}
          </div>
        </figure>
      )}
    </>
  );
};

export default EventReadMore;
