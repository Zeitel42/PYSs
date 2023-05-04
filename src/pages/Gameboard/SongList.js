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
  const [selected, setSelected] = useState("Choose a song");
  useEffect(() => {
    userChoice = selected;
    // console.log(choice);
  }, []);
  let songTitles = [];
  let unique_song = [];

  items.map((item) => {
    // console.log(item);
    for (let set of item.sets.set) {
      for (let song of set.song) {
        songTitles.push(song.name);
      }
    }
    // console.log("total songs", songTitles.length);

    songTitles.forEach((title) => {
      if (!unique_song.includes(title)) {
        unique_song.push(title);
      }

      unique_song.sort();
    });
  });
  console.log(unique_song.length, unique_song);
  return (
    <div>
      <select
        onChange={(e) => {
          setSelected(e.target.value);
          console.log(selected, userChoice);
        }}
      >
        {unique_song.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SongList;

{
  /* <Modal className="modal-body" show={show} onHide={handleClose}>
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
      </Modal> */
}
