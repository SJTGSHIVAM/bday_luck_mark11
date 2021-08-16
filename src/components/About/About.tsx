import { useState } from "react";
import { couldStartTrivia } from "typescript";

import "./About.css";
const About = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Is your Bday lucky?</h1>
      </header>
      <section className="about">
        <h2 id="description">Description</h2>
        <p>
          This is a web app that checks if your birth date is lucky for you or
          not. Built using ReactJS.{" "}
        </p>
        <h2 id="live-link">Github Link</h2>
        <p>
          <a href="https://github.com/SJTGSHIVAM/bday_luck_mark11">
            https://github.com/SJTGSHIVAM/bday_luck_mark11
          </a>
        </p>
        <h2 id="salient-features-are">Salient features are</h2>
        <ul>
          <li>Built using ReactJS</li>
          <li>An input field to take the user&#39;s complete birth date</li>
          <li>An input field for the user&#39;s to enter their lucky number</li>
          <li>
            App calculates if the sum of digits of birthdate is divisible by the
            lucky number.
          </li>
          <li>
            Show the output if the birthdate is lucky or not to the user
            depending on the calculated results.
          </li>
          <li>Privacy notice shown to user</li>
          <li>Giphy Api used to show Gif according to result</li>
        </ul>
      </section>
    </div>
  );
};
export default About;
