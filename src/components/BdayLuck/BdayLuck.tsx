import { useState } from "react";
import "./BdayLuck.css";
const BdayLuck = () => {
  return (
    <div className="bcard">
      <header className="head">Input Bday</header>
      <section className="instruction">Enter your birth date</section>
      <label>
        <section className="label"> Birth Date</section>
        <input type="date" onChange={() => {}} />
      </label>
    </div>
  );
};
export default BdayLuck;
