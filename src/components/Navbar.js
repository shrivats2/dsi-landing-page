import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/logo.png";
import bar from "../assets/images/bar.png";


function Click() {
  var navbar = document.querySelector(".navbar-collapse ul");
  navbar.classList.toggle("active");
  console.log(navbar);
}


const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <section className="navContainer">
        <img src={logo} id="logo" alt="" />
        <section className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">Services</li>
            <li className="nav-item">Product</li>
            <li className="nav-item">Technology</li>
            <li className="nav-item dropdown">
              About
            </li>
            <li className="nav-item dropdown">
              Client
            </li>
            <li className="nav-item">Partner</li>
          </ul>
        </section>
        <section className="rightIcon">
        <FontAwesomeIcon icon={faHouse} className="fas"/>
        <FontAwesomeIcon icon={faEnvelope} className="fas" />
        <FontAwesomeIcon icon={faSyncAlt} className="fas" />
        </section>
      </section>
    </nav>
  );
};

export default Nav;