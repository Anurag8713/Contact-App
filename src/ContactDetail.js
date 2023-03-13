import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user1.png";

export default function ContactDetail(props) {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} />
        </div>
        <div className="content">
          <div>Anurag Singh</div>
          <div>anuragsingh84710844@gmail.com</div>
        </div>
        <div className="center-div">
          <Link to={"/"}>
            <button
              className="ui button blue"
              style={{ marginBottom: "10px", marginLeft: "60px" }}
            >
              Back to Contact List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
