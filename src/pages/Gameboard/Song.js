// When user chooses a song it is added to the setlist
import React, { useState, useEffect } from "react";
import SongListModal from "./SongListModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Song = ({ userChoice, setUserChoice }) => {
  // let userSongs = [];
  let userSetOne = [];
  // const setOneSongs = "";

  const [userSong, setUserSong] = useState("");
  userSetOne.push(userChoice);

  console.log(userSetOne);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ul>
              {userSetOne.map((song) => {
                <li key={song}>{song}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Song;
