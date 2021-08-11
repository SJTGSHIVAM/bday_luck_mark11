import { useState } from "react";
import Giphy from "../Giphy";
import "./Backcard.css";
const Backcard = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Do you know if your Bitrhday is lucky?</h1>
      </header>
      <Giphy searchTerm={"bday"} />
      <button>Click Here to find it out!</button>
    </div>
  );
};
export default Backcard;
