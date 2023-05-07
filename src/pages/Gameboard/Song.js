// When user chooses a song it is added to the setlist
import React, { useState, useEffect } from "react";
// import SongListModal from "./SongListModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import SongList from "./SongList";

// global variables
let userSetOne = [];
let userSetTwo = [];
let setOneSongId = "";

const Song = ({ userChoice, setUserChoice, items }) => {
  // let userSongs = [];

  // react hooks
  const [userSong, setUserSong] = useState("");
  const [userSongId, setUserSongId] = useState(0);
  useEffect(() => {}, []);

  // builds userSetOne array to populate ul
  if (!userSetOne.includes(userChoice) && userChoice != "Choose a song") {
    userSetOne.push(userChoice);
    setUserSongId(userSongId + 1);
  }
  // if (!userSetTwo.includes(userChoice) && userChoice != "Choose a song") {
  //   userSetTwo.push(userChoice);
  //   setUserSongId(userSongId + 1);
  // }
  // console.log(userSongId, userChoice);
  // console.log(userSetOne);

  let setOneList = (userSetOne || []).map((song) => {
    return (
      <div>
        <ListGroupItem as="li" key={userSongId}>
          <Row>
            <Col
              style={{
                width: "40%",
                textAlign: "center",
                backgroundColor: "gray",
                color: "white",
                textShadow: "1px 2px 3px black",
              }}
            >
              <h4>{song}</h4>
            </Col>
            <Col>
              <Button>Edit</Button>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  });
  let setTwoList = (userSetTwo || []).map((song) => {
    return (
      <div>
        <ListGroupItem as="li" key={userSongId}>
          <Row>
            <Col
              style={{
                width: "40%",
                textAlign: "center",
                backgroundColor: "gray",
                color: "white",
                textShadow: "1px 2px 3px black",
              }}
            >
              <h4>{song}</h4>
            </Col>
            <Col>
              <Button>Edit</Button>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Set One</h3>
          </Col>
        </Row>

        <ListGroup as="ol" numbered>
          {setOneList}
        </ListGroup>
        <Row>
          <Col>
            <SongList
              items={items}
              userChoice={userChoice}
              setUserChoice={setUserChoice}
            />
          </Col>
        </Row>
        {/* <h3>Set Two</h3>
        <ListGroup as="ol" numbered>
          {setTwoList}
        </ListGroup> */}
      </Container>
    </div>
  );
};
export default Song;
