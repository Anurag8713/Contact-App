import React from "react";

export default function AddContact(props) {
  const [data, setdata] = React.useState({
    name: "",
    email: "",
  });

  function handlechange(event) {
    const { name, value, email } = event.target;
    setdata((prevform) => {
      return {
        ...prevform,
        [name]: value,
      };
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    props.onsubmit(data);
  }

  return (
    <div>
      <h3>Add Contact</h3>
      <form className="ui form" onSubmit={handlesubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.Name}
            onChange={handlechange}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="Email"
            name="email"
            placeholder="Email"
            value={data.Email}
            onChange={handlechange}
          ></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
