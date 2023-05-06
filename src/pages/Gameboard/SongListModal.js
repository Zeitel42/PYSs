import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";

const SongListModal = ({
  isOpen,
  setIsOpen,
  handleClose,
  uniqueSong,
  setUserChoice,
}) => {
  //   useEffect(() => {
  //     // userChoice = selected;
  //     // console.log(choice);
  //   }, [value]);

  console.log(isOpen, uniqueSong.length);
  return (
    <div>
      <Modal
        className="modal-body"
        size="lg"
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Body
          style={{
            maxHeight: "600px",
            overflowY: "auto",
          }}
        >
          <ListGroup as="ol" className="list-body">
            {uniqueSong.map((song) => (
              <ListGroup.Item as="li" key={song}>
                <Row>
                  <Col style={{ width: "40%", textAlign: "center" }}>
                    <p>{song}</p>
                  </Col>
                  <Col style={{ width: "40%", textAlign: "center" }}>
                    <Button
                      onClick={() => {
                        {
                          //   setUserChoice(song);
                          setIsOpen(false);
                        }
                      }}
                    >
                      <BsPlusCircle />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SongListModal;
