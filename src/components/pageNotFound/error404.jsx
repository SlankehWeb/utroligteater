import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Donkey Kong have run out of barrels</h1>
      <p>
        <Link to="/">Gå til forsiden</Link>
      </p>
    </>
  );
};

export default ErrorPage;