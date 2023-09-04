import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>

      <header>
     
         <img           
         src={require("./ae35da149404cf4d8a2f9403082159a2.png")}
          className="logo"
          alt="logo"
        />

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

   
        <nav>
          <ul>
            <li>
              <Link to="/">FORSIDE</Link>
            </li>
            <li>
              <a href="/forestillinger&events">FORESTILLINGER & EVENTS</a>
            </li>
            <li>
              <a href="/skuespillere">SKUESPILLERE</a>
            </li>
            <li>
              <a href="/Login">LOGIN</a>
            </li>
          </ul>
        </nav>

        <label
          htmlFor="nav-toggle"
          title="Show navbar"
          className="nav-toggle-label"
        >
          <span></span>
        </label>
      </header>
    </>
  );
};

export default NavBar;
