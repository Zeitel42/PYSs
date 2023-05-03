// This will compile all songs played live by the band at least once per setlistfm api call

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let id = 0;
const SongList = ({ items, userChoice, setUserChoice }) => {
  console.log(items);
  // modal functionality

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  //
  //mapping songs and getting user selection
  useEffect(() => {
    // console.log(userChoice);
  }, []);
  let songTitles = [];
  let unique_song = [];

  items &&
    items.map((item) => {
      console.log(item);
      //   for (let set of item.setlist.sets.set) {
      //     for (let song of set.song) {
      //       songTitles.push(song.name);
      //     }
      //   }
      // console.log(songTitles);

      songTitles.forEach((title) => {
        if (!unique_song.includes(title)) {
          unique_song.push(title);
        }

        unique_song.sort();
        //   console.log(unique_song);
      });
    });
  return (
    <div>
      {/* <Button onClick={handleShow}>
        <BsPlusCircle />
      </Button> */}

      <Modal className="modal-body" show={show} onHide={handleClose}>
        <Modal.Body>
          <ListGroup as="ul" className="list-body">
            {unique_song.map((song) => (
              <ListGroup.Item as="li" key={id++}>
                <Row>
                  <Col style={{ width: "40%", textAlign: "center" }}>
                    <h3>{song}</h3>
                  </Col>
                  <Col style={{ width: "40%", textAlign: "center" }}>
                    <Button
                      onClick={() => {
                        {
                          handleShow();
                        }
                        setUserChoice(song);

                        setShow(false);
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

export default SongList;
