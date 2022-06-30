import "./content.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Clock from "./Clock";

const Content = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const phonebookList = [
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

  return (
    <div className="content">
      <div className="form">
        <div className="line">
          <p>Contacts</p>

          <Button variant="primary" onClick={handleShow}>
            Add contact
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="clock">
        <h4>Time :</h4>
        <Clock date={date} setDate={setDate} />
      </div>
    </div>
  );
};

export default Content;
