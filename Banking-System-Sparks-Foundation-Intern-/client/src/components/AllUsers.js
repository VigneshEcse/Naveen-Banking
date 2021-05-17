import React from "react";
import "./AllUsers.css";
import "../App.css";
import User from "./User";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function AllUsers() {
  return (
    <div className="allusers">
      <Link to="/">
        <HomeRoundedIcon
          className="homeIcon"
          fontSize="large"
        ></HomeRoundedIcon>
      </Link>

      <ArrowBackIcon className="backButton" fontSize="large"></ArrowBackIcon>
      <div className="allusers__main">
        <h2 className="allusers__heading">ALL CUSTOMERS</h2>
        <div className="allusers__container">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
