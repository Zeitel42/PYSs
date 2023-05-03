import React from "react";
import SetOneSongOne from "./SetOneSongOne";

const SetOne = ({ userChoice }) => {
  return (
    <div>
      <h2>Set One</h2>
      <SetOneSongOne userChoice={userChoice} />
    </div>
  );
};

export default SetOne;
