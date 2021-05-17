import React from "react";
import "./Menu.css";
import "../App.css";
// import Button from "@material-ui/core/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <HomeRoundedIcon
          className="homeIcon"
          fontSize="large"
        ></HomeRoundedIcon>

        
      </Link>
      <div className="menu__container">
        <h2>MENU</h2>
        <Link to="/allUsers" className="menu__link">
          <span className="menu__wrapper">
            View All Customers
            {/* <Button className="menu__button">View All Customers</Button> */}
          </span>
        </Link>
        <Link className="menu__link">
          <spa className="menu__wrapper">View Transactions</spa>
          {/* <Button className="menu__button">View Transactions</Button> */}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
