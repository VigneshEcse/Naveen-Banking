import React from "react";
import "./User.css";
import Button from "@material-ui/core/Button";

function User() {
  return (
    <div className="user">
      <div className="user__bars">
        <div className="users__leftColumn">
          <div className="users__details">Name</div>
          <div className="users__details">Email</div>
          <div className="users__details">Balance</div>
        </div>

        <div className="users__rightColumn">
          <Button className="users__button">View</Button>
        </div>
      </div>
    </div>
  );
}

export default User;
