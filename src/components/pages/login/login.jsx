import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../auth/auth";
import Profile from "../profile/profile";

const Login = () => {
 
  const { loginData, setLoginData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (form) => {
    const formData = new URLSearchParams();
    formData.append("username", form.username);
    formData.append("password", form.password);
    const endpoint = `http://localhost:4000/login`;

    try {
      const result = await axios.post(endpoint, formData);
      handleSessionData(result.data);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };
  const handleSessionData = async (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
  };

  return (
    <>
      <div className="pageContainer">
        <div className="loginContainer">
          {!loginData && !loginData.username ? (
            <form onSubmit={handleSubmit(formSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Indtast brugernavn"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="error">Du skal indtaste dit brugernavn</span>
                )}
              </div>
              <div>
                <input
                  placeholder="Indtast password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="error">
                    Du skal indtaste din adgangskode
                  </span>
                )}
              </div>

              <div className="submit">
                <button type="submit">LOGIN</button>
              </div>
            </form>
          ) : (
            <section>
              <p>
                {`Du er logget ind som ${loginData.user.firstname} ${loginData.user.lastname} `}{" "}
              </p>
              <Profile/>
              <button onClick={() => logOut()} id="logout">
                LOG UD
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;