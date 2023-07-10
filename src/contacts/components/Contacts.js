import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Alert, AlertTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/contact.css";
import TextField from "@mui/material/TextField";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [close, setClose] = useState(true);
  const addContact = useFormik({
    initialValues: {
      name: "",
      surname: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.name || !values.surname || !values.phone) {
        setClose(true);
        setError("Please fill in all fields.");
        return;
      }
      if (!/^[\d-]+$/.test(values.phone)) {
        setClose(true);
        setError("Please enter only digits and dashes for the phone number.");
        return;
      }
      setShowForm(false);
      setContacts((prevContacts) => [...prevContacts, values]);
      resetForm();
      setError("");
    },
  });
  const deleteContact = (index) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts.splice(index, 1);
      return updatedContacts;
    });
  };
  const show = () => {
    setShowForm(true);
  };
  const hide = () => {
    setShowForm(false);
  };
  const closeError = () => {
    setClose(false);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log(error));
  }, []);
  const splitName = (fullName) => {
    const parts = fullName.split(" ");
    return {
      name: parts[0] || "",
      surname: parts.slice(1).join(" ") || "",
    };
  };
  return (
    <div>
      {error && close && (
        <Alert
          style={{ display: "flex", justifyContent: "flex-end" }}
          severity="error"
          onClose={closeError}
          action={<CloseIcon fontSize="inherit" onClick={closeError} />}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      <div className="table-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              const { name, surname } = splitName(contact.name);
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{surname || contact.surname}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => deleteContact(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!showForm && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={show}>
            Show form
          </Button>
        </div>
      )}
      {showForm && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={addContact.handleSubmit}>
            <TextField
              style={{marginRight:"20px",backgroundColor: "white" }}
              id="demo-helper-text-misaligned-no-helper"
              value={addContact.values.name}
              onChange={addContact.handleChange}
              name="name"
              placeholder="Name"
            />
            <TextField
              style={{marginRight:"20px", backgroundColor: "white" }}
              id="demo-helper-text-misaligned-no-helper"
              value={addContact.values.surname}
              onChange={addContact.handleChange}
              name="surname"
              placeholder="Surname"
            />
            <TextField
              style={{ backgroundColor: "white" }}
              id="demo-helper-text-misaligned-no-helper"
              value={addContact.values.phone}
              onChange={addContact.handleChange}
              name="phone"
              placeholder="Phone"
            />
            <Button style={{top:"10px",marginLeft:"20px"}} variant="contained" type="submit">
              Submit
            </Button>
          </form>
          <Button style={{marginLeft:"20px"}} variant="contained" onClick={hide}>
            Hide form
          </Button>
        </div>
      )}
    </div>
  );
};

export default Contacts;
