// This will compile all songs played live by the band at least once per setlistfm api call

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import SongListModal from "./SongListModal";

let id = 0;
const SongList = ({ items, setUserChoice }) => {
  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  // react hooks

  const [isOpen, setIsOpen] = useState(false);
  const [uniqueSong, setUniqueSong] = useState([]);

  // variables
  let songTitles = [];

  // map method get song names from api setlists
  items.map((item) => {
    // console.log(item);
    for (let set of item.sets.set) {
      for (let song of set.song) {
        songTitles.push(song.name);
      }
    }
    // console.log("total songs", songTitles.length);

    // forEach method to eliminate duplicates and sort alphabetically
    songTitles.forEach((title) => {
      if (!uniqueSong.includes(title)) {
        uniqueSong.push(title);
      }

      uniqueSong.sort();
    });
  });
  console.log(uniqueSong.length);

  return (
    <div>
      <Button onClick={handleShow}>
        <BsPlusCircle />
      </Button>
      <SongListModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
        uniqueSong={uniqueSong}
        setUserChoice={setUserChoice}
      />
    </div>
  );
};

export default SongList;

{
  /* <select
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
      </select> */
}
