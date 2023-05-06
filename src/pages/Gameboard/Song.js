// When user chooses a song it is added to the setlist
import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Song = ({ userChoice }) => {
  const [song, setSong] = useState("Choose a song");

  const getSong = (value) => {
    setSong(`${value}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>{song}</p>
          </Col>
          <Col>
            <SongList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Song;
