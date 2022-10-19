import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/logo.png";
import bar from "../assets/images/bar.png";

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label > 
        <img id="btn" src={bar} />
        <i className="fa fa-times" id="cancel"></i>
      </label>
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
        <FontAwesomeIcon icon={faHouse} size={'3x'}/>
        <FontAwesomeIcon icon={faEnvelope} size={'3x'} />
        <FontAwesomeIcon icon={faSyncAlt}   size={'3x'}  />
        </section>
      </section>
    </nav>
  );
};

export default Nav;