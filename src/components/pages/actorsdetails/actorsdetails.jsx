import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./actorsdetails.scss";
import { Link } from "react-router-dom";

const ActorsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/actors/${id}`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [id]);

  return (
    <div>
      <div className="actorsdetailsborder">
        <h1>Skuespillere</h1>
        {data && (
          <figure className="actorsdetailsCard" key={data.id}>
            <img
              src={`http://localhost:4000/Assets/Images/actors/${data.image}`}
              alt="img"
            />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </figure>
        )}
      </div>
      <div className="actorsdetailbutton">
        <Link to={`/skuespillere`}>
          <button>ALLE SKUESPILLERE</button>
        </Link>
      </div>
    </div>
  );
};

export default ActorsDetails;
