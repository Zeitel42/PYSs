// The gameboard will contain the searchable modal where the user will select songs to build each set.
import SongList from "./SongList";
import SetOne from "./SetOne/SetOneIndex";
import React, { useState, useEffect } from "react";

const Gameboard = (data) => {
  const [items, setItems] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  data = [
    {
      setlist: [
        {
          sets: [
            {
              set: [
                {
                  name: "set 1",
                  song: [
                    {
                      name: "Touch of Grey",
                    },
                    {
                      name: "Hell in a Bucket",
                    },
                    {
                      name: "One More Saturday Night",
                    },
                    {
                      name: "Playing in the Band",
                    },
                    {
                      name: "St. Stephen",
                    },
                    {
                      name: "Bertha",
                    },
                    {
                      name: "Scarlet Begonias",
                    },
                    {
                      name: "Fire on the Mountain",
                    },
                    {
                      name: "Help on the Way",
                    },
                    {
                      name: "Franklin's Tower",
                    },

                    {
                      name: "Ramble on Rose",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  //   console.log(data);
  useEffect(() => {
    setItems(data);
  }, []);
  console.log(items);

  return (
    <div>
      <h1>Place Your Sets</h1>
      {/* <Form reqType={reqType} setReqType={setReqType} /> */}
      <SongList
        items={items}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
      <SetOne userChoice={userChoice} />
    </div>
  );
};

export default Gameboard;
