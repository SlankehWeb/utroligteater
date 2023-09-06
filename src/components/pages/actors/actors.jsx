import ActorsList from "./parts/actorslist";
import "./actors.scss";

const Actors = () => {
    return ( 
    <>
    <div className="actorsborder">
      <h1>Skuespillere</h1>
    <ActorsList/>
    </div>
    </>
    );
  };
  
  export default Actors;