// Import necessary modules and components
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../auth/auth";

// Define the Login component
const Login = () => {
  // Retrieve authentication data and methods from useAuth hook
  const { loginData, setLoginData } = useAuth();

  // Initialize a state variable to store error messages
  const [message, setMessage] = useState("");

  // Function to send a login request
  const sendLoginRequest = async (data) => {
    // Create form data with username and password
    const formData = new URLSearchParams();
    formData.append("username", data.target.form.username.value);
    formData.append("password", data.target.form.password.value);

    try {
      // Send a POST request to the login endpoint
      const result = await axios.post("http://localhost:4000/login", formData);

      // Handle the session data if login is successful
      handleSessionData(result.data);
    } catch (err) {
      // Handle errors by setting an error message
      setMessage("Kunne ikke logge ind!");
    }
  };

  // Function to handle session data after successful login
  const handleSessionData = (data) => {
    if (data) {
      // Store the authentication token in session storage
      sessionStorage.setItem("token", JSON.stringify(data));

      // Update the authentication data in the app state
      setLoginData(data);
    }
  };

  // Function to log out the user
  const logOut = () => {
    // Remove the authentication token from session storage
    sessionStorage.removeItem("token");

    // Clear the authentication data in the app state
    setLoginData("");
  };

  return (
    <>
      {!loginData && !loginData.username ? (
        // Display login form if user is not logged in
        <form>
          <div>
            <label htmlFor="username">Brugernavn: </label>
            <input type="text" id="username" placeholder="Indtast brugernavn" />
          </div>
          <div>
            <label htmlFor="password">Adgangskode: </label>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode"
            />
          </div>
          {message && <div>{message}</div>}

          <div>
            <button type="button" onClick={sendLoginRequest}>
              Send
            </button>
          </div>
        </form>
      ) : (
        // Display user information and logout button if user is logged in
        <div>
          <p>
            Du er logget på som{" "}
            {`${loginData.firstname} ${loginData.lastname} `}
          </p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
    </>
  );
};

// Export the Login component
export default Login;
