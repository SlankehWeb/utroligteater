// Import the Hero component from the specified path.
import Hero from "../../global/hero/hero";

// Import the Events component from the local "./parts/eventfetch" file.
import Events from "./parts/eventfetch";

// Define a functional component called Showsandevents.
const Showsandevents = () => {
  return (
    // Render the Hero and Events components inside a React fragment.
    <>
      <Hero />
      <Events />
    </>
  );
};

// Export the Showsandevents component as the default export.
export default Showsandevents;
