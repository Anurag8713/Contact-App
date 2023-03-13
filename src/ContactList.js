import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const handler = (id) => {
    props.getId(id);
  };

  const rendercontactlist = props.contacts.map((contact) => {
    return <ContactCard contact={contact} handle={handler} key={contact.id} />;
  });
  return (
    <div className="ui celled list">
      <div className="list-header">
        <h2 className="list-title">Contact List</h2>
        <Link to="add">
          <button className="ui button blue" style={{ marginBottom: "10px" }}>
            Back to Add Contact
          </button>
        </Link>
      </div>

      {rendercontactlist}
    </div>
  );
}
