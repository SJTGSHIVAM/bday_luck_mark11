import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Giphy from "../Giphy";
import "./Backcard.css";
const Backcard = () => {
  return (
    <div className="backcard">
      <header>
        <h1>Do you know if your Birthday is lucky?</h1>
      </header>
      <Giphy searchTerm={"bday"} />
      <Link to="/bdayluck" className="link">
        <button className="clickbtn"> Click Here to find it out!</button>
      </Link>
    </div>
  );
};
export default Backcard;
