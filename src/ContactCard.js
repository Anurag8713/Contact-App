import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className="item main-container">
      <i className="user large circle icon user-circle"></i>
      <div className="content">
        <Link to={`add/contact/${id}`}>
          <div className="header">{name}</div>
          {email}
        </Link>
      </div>
      <i
        className="trash alternate outline icon Trash"
        style={{ color: "red" }}
        onClick={() => props.handle(id)}
      ></i>
    </div>
  );
}
