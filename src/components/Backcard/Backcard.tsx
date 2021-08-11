import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Giphy from "../Giphy";
import "./Backcard.css";
const Backcard = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Do you know if your Bitrhday is lucky?</h1>
      </header>
      <Giphy searchTerm={"bday"} />

      <button>
        {" "}
        <Link to="/bdayluck" className="link">
          Click Here to find it out!
        </Link>
      </button>
    </div>
  );
};
export default Backcard;
