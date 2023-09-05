import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../auth/auth";

const Login = () => {
  const { loginData, setLoginData } = useAuth()
  const [message, setMessage] = useState("")
  const sendLoginRequest = async (data) => {
    const formData = new URLSearchParams()
    formData.append("username", data.target.form.username.value)
    formData.append("password", data.target.form.password.value)

    try {
      const result = await axios.post(
        "http://localhost:4000/login",
        formData
      )
      handleSessionData(result.data)
    } catch (err) {
      setMessage("Kunne ikke logge ind!")
    }
  }
  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data))
      setLoginData(data)
    }
  }
  const logOut = () => {
    sessionStorage.removeItem("token")
    setLoginData("")
  }

    return ( 
    <>
{!loginData && !loginData.username ? (
          <form>
            <div>
              <label htmlFor="username">Brugernavn: </label>
              <input
                type="text"
                id="username"
                placeholder="Indtast brugernavn"
              />
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
              <button type="button" onClick={sendLoginRequest}>Send</button>
            </div>
          </form>
        ) : (
          <div>
            <p>Du er logget på som {`${loginData.firstname} ${loginData.lastname} `}</p>
            <button onClick={logOut}>Log ud</button>
          </div>
        )}
    </>
    );
  };
  
  export default Login;