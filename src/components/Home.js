import React from "react";
import img1 from "../assets/images/img1.png";


const Home = () => {
  return (
    
    <div className="container home">
        <link rel="preload" as="image" href="imag1.png" />
      <div className="row">
          <div className="headerText rowLeft">
            <h2>
              Making the most of the <br />
              evergrowing
            </h2>
            <h3>Information Technology</h3>

            <p>
              Managed by a team of professional experts with extensive
              experience and impressive track records
            </p>

            <a href="#">Read More</a>
          </div>
          <div className="headerImage rowRight">
            <img className="img-fluid" src={img1} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Home;