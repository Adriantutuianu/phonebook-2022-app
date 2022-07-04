import "./content.css";
import React, { useState } from "react";
import {
  Modal,
  Button,
  ListGroup,
  Form,
  InputGroup,
  FormGroup,
} from "react-bootstrap";
import Clock from "./Clock";

const initialList = [
  {
    name: "Name1",
    surname: "Surname1",
    phone: "07927000001",
  },
  {
    name: "Name2",
    surname: "Surname2",
    phone: "07927000002",
  },
  {
    name: "Name3",
    surname: "Surname3",
    phone: "07927000003",
  },
  {
    name: "Name4",
    surname: "Surname4",
    phone: "07927000004",
  },
  {
    name: "Name5",
    surname: "Surname5",
    phone: "07927000005",
  },
];

const Content = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [list, setList] = useState(initialList);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first", firstName);
    console.log("last", lastName);
    console.log("phone", phoneNumber);

    const newContact = {
      name: firstName,
      surname: lastName,
      phone: phoneNumber,
    };

    // spread operator to add a new contact to initial list.
    setList([...list, newContact]);
    handleCloseModal();

    // reset inputs value
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  // !important: Loop through array of objects and displayed them.
  const displayedList = list.map((item, index) => {
    return (
      <ListGroup.Item className="list-item" key={index}>
        <span className="col-item name">{item.name}</span>
        <span className="col-item surname">{item.surname}</span>
        <span className="col-item line">-</span>
        <span className="col-item phone">{item.phone}</span>
      </ListGroup.Item>
    );
  });

  const handleChangeFirstName = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
  };
  const handleChangeLastName = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
  };
  const handleChangePhoneNumber = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  return (
    <div className="content">
      <h2>Contacts</h2>
      <div className="form">
        <div className="flex">
          <ListGroup>{displayedList}</ListGroup>
        </div>
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Contact:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="mb-3-1">
                Name:
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => handleChangeFirstName(e)}
                value={firstName}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="mb-3-1">
                Surname:
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => handleChangeLastName(e)}
                value={lastName}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="mb-3-1">
                Phone:
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => handleChangePhoneNumber(e)}
                value={phoneNumber}
              />
            </InputGroup>{" "}
            <Button type="submit" onClick={handleSubmit} variant="secondary">
              Create Contact
            </Button>
          </Modal.Body>
        </Modal>
      </div>
      <Button
        variant="secondary"
        className="btn-add-contact"
        onClick={handleShowModal}
      >
        Add contact
      </Button>
      <div className="clock">
        <h4>Time :</h4>
        <Clock date={date} setDate={setDate} />
      </div>
    </div>
  );
};

export default Content;
