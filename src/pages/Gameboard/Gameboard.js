// The gameboard will contain the searchable modal where the user will select songs to build each set.
import SongList from "./SongList";
// import SetOne from "./SetOne/SetOneIndex";
import React, { useState, useEffect } from "react";

const Gameboard = () => {
  // variables
  const API_URL = "http://localhost:3001/";
  let data;
  // Hooks
  const [items, setItems] = useState([]);
  const [userChoice, setUserChoice] = useState("");

  useEffect(() => {
    let page = 1;
    let allSetPages = [];

    const fetchSets = async () => {
      const response = await fetch(`${API_URL}setlists?p=${page}`);
      data = await response.json();
      console.log(data.setlist);

      if (data.setlist) {
        page++;
      } else {
        page = null;
        return true;
      }

      setItems(allSetPages);
    };

    (async () => {
      while (page != null) {
        const status = await fetchSets();
        allSetPages = allSetPages.concat(data.setlist);
        if (status === true) {
          break;
        }
      }
    })();
  }, []);

  return (
    <div className="Gameboard">
      <h1>Place Your Sets</h1>
      <SongList
        items={items}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    </div>
  );
};

export default Gameboard;
