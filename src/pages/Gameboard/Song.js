// When user chooses a song it is added to the setlist
import React, { useState, useEffect } from "react";
// import SongListModal from "./SongListModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
let userSetOne = [];

const Song = ({ userChoice, setUserChoice }) => {
  // let userSongs = [];

  // const setOneSongs = "";

  const [userSong, setUserSong] = useState("");
  if (!userSetOne.includes(userChoice)) {
    userSetOne.push(userChoice);
  }

  console.log(userSetOne);
  return (
    <div>
      <Container>
        <ListGroup as="ul">
          {userSetOne.map((song) => {
            <ListGroupItem as="li" key={song}>
              <Row>
                <Col style={{ width: "40%", textAlign: "center" }}>
                  <h4>{song}</h4>
                </Col>
                <Col>
                  <Button>Edit</Button>
                </Col>
              </Row>
            </ListGroupItem>;
          })}
        </ListGroup>
      </Container>
    </div>
  );
};
export default Song;
