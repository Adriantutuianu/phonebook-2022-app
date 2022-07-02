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

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);
  const handleSubmit = () => {
    setShow(false);
    // extract form data and add it to the list
  };
  // !important: Loop through array of objects and displayed them.
  const displayedList = list.map((item) => {
    return (
      <ListGroup.Item key={item.phone}>
        <span className="list-item name">{item.name} </span>
        <span className="list-item surname">{item.surname}</span>
        <span className="list-item phone">{item.phone}</span>
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
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Modal.Header closeButton>
                <Modal.Title>Add Contact:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1" className="mb-3-1">
                    Name:
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1" className="mb-3-1">
                    Surname:
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1" className="mb-3-1">
                    Phone:
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button type="submit" variant="secondary">
                  Create Contact
                </Button>
              </Modal.Footer>
            </FormGroup>
          </Form>
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
