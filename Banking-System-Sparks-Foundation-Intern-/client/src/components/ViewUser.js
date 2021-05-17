import React from "react";
import Button from "@material-ui/core/Button";
import "./ViewUser.css";

function ViewUser() {
  return (
    <div className="viewuser">
      <h3 className="viewuser__heading">USER DETAILS</h3>
      <div className="viewuser__container">
        <div className="viewuser__fields">
          <div className="viewuser__text">
            <strong>Name :</strong>
          </div>
          <div className="viewuser__text">Naveen G</div>
        </div>
        <div className="viewuser__fields">
          <div className="viewuser__text">
            <strong>Email :</strong>
          </div>
          <div className="viewuser__text">naveen@gmail.com</div>
        </div>
        <div className="viewuser__fields">
          <div className="viewuser__text">
            <strong>Balance :</strong>
          </div>
          <div className="viewuser__text">
            <strong>₹</strong>&nbsp;5000.00
          </div>
        </div>
      </div>
      <div className="viewuser__btnDiv">
        <Button className="viewuser__button">Transfer Money</Button>
      </div>
    </div>
  );
}

export default ViewUser;
