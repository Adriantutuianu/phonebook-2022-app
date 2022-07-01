import "./content.css";
import React, { useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
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

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);
  const handleSubmit = () => {
    setShow(false);
    // extract form data and add it to the list
  };
  // !important: Loop through array of objects and displayed them.
  const displayedList = list.map((item) => {
    return (
      <ListGroup.Item>
        <span>
          {" "}
          {item.name}
          {item.surname}
          {item.phone}
        </span>
      </ListGroup.Item>
    );
  });

  return (
    <div className="content">
      <h2>Contacts</h2>
      <div className="form">
        <div className="line">
          <ListGroup>{displayedList}</ListGroup>
        </div>
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create Contact
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Button variant="primary" onClick={handleShowModal}>
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
