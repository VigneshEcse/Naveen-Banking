import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__heading">THE SPARKS FOUNDATION GRIP</h1>
      <div className="home__main">
        <Link to = '/menu' className = "home__link">
          <Button className="home__button">Get Started</Button>
        </Link>
      </div>
      <div className="home__footer">
        <p>
          By,
          <br />
          <br /> NAVEEN G
        </p>
      </div>
    </div>
  );
}

export default Home;
