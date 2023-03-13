import React from "react";
import uuid from "react-uuid";
import Navbar from "./Navbar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";

export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = React.useState([]);

  const getdata = (contact) => {
    setcontacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deletehandler = (id) => {
    const newlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newlist);
  };

  React.useEffect(() => {
    const retrivedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivedata) {
      setcontacts(retrivedata);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ContactList contacts={contacts} getId={deletehandler} />}
        />
        <Route path="/add" element={<AddContact onsubmit={getdata} />} />
        <Route path="/add/contact/:id" element={<ContactDetail />} />
      </Routes>

      {/* <AddContact onsubmit={getdata} />
        <ContactList contacts={contacts} getId={deletehandler} /> */}
    </div>
  );
}
