import React from "react";
import mockup from "../images/mockup.png";
import dots from "../images/dots2.png";
import "./home.scss";
import { Link } from "react-router-dom/";

const Home = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="top-section">
          <div className="header-section">
            <div className="content container">
              <h1> We design and build websites for businesses. </h1>
              <p>
                Focusing on customer outcomes and simplicity, we minimize risk
                and <br /> increase business success with cutting edge
                technology.{" "}
              </p>

              <p className="call-to-action">
                <button className="btn btn-primary">
                  <Link className="link-item" to="/contact">
                    Get a Quote
                  </Link>
                </button>
                <button className="btn btn-danger">View Our Work</button>
              </p>
            </div>
            <div className="img-sec">
              <img src={mockup} alt="phone" />
              <img src={dots} className="dots" alt="dots" />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
