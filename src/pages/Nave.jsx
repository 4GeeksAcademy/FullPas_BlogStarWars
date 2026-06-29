// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Nave = props => {
  // Access the global state using the custom hook.
  //const { store } = useGlobalReducer()

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { naveId } = useParams()
  const [starship, setStarship] = useState({})
  useEffect(()=>{
    fetch('https://www.swapi.tech/api/starships/' + naveId)
		.then( (response)=> response.json())
		.then( (data)=>{
			console.log(data.result.properties)
      setStarship(data.result.properties)
	})
  },[] )

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${naveId}.jpg?raw=true`}
        className="card-img-top"
        style={{ width: "224px", height: "126px", objectFit: "cover" }}
      />
      <p className="display-4">Nave Id: {naveId}</p>
      <p className="display-4">Name: {starship.name}</p>
      <p className="display-4">Model: {starship.model}</p>
      <p className="display-4">Manufacture: {starship.manufacturer}</p>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Nave.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
