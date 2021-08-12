import { useState } from "react";
import Giphy from "../Giphy";
import PrivacyNotice from "../PrivacyNotice";
import "./BdayLuck.css";
const BdayLuck = () => {
  const [luckyNumber, setLuckyNumber] = useState<number>(NaN);
  const [bDate, setBDate] = useState<string>("");
  const [isLucky, setIsLucky] = useState(true);
  const [valLuckyNumber, setValLuckyNumber] = useState(true);
  const [valBDate, setValBDate] = useState(true);

  const invalidateNumber = (e: number): boolean => isNaN(e) || e < 1;
  const invalidateBDate = (e: string): boolean => isNaN(Date.parse(e));

  const checkLuck = () => {
    if (invalidateNumber(luckyNumber) && invalidateBDate(bDate)) {
      setValBDate(false);
      setValLuckyNumber(false);
    }
    if (invalidateBDate(bDate)) {
      setValBDate(false);
    }
    if (invalidateNumber(luckyNumber)) {
      setValLuckyNumber(false);
    }

    console.log(bDate);
    // console.log(luckyNumber);
    console.log(valBDate);
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const bday = String(event.target.value);
    console.log(bday);
    if (invalidateBDate(bday)) {
      setValBDate(false);
      setBDate(bday);

      return;
    }
    setValBDate(true);
    setBDate(bday);
  };

  const onLuckyNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const luckyNum = parseFloat(event.target.value);

    if (invalidateNumber(luckyNum)) {
      setValLuckyNumber(false);
      setLuckyNumber(luckyNum);

      return;
    }
    setValLuckyNumber(true);
    setLuckyNumber(luckyNum);
  };
  return (
    <>
      <PrivacyNotice />

      <div className="bcard">
        <header className="head">Input Bday</header>
        <section className="instruction">Enter your birth date</section>
        <label>
          <section className="label"> Birth Date</section>
          <input type="date" onBlur={onDateChange} />
        </label>

        {!valBDate && (
          <div>Make sure to fill a valid date and then click the button.</div>
        )}
        <label>
          <section className="label"> Lucky Number:</section>
          <input
            type="number"
            value={luckyNumber}
            onChange={onLuckyNumberChange}
          />
        </label>
        {!valLuckyNumber && (
          <div>Please enter a positive Number greater than one</div>
        )}
        <button onClick={checkLuck}>CHECK</button>
        {isLucky ? (
          <section>
            <span>Hard luck! Your Birthday is not forming a lucky number.</span>
            <Giphy searchTerm={"sad"} />
          </section>
        ) : (
          <section>
            <span>Hurray! Your Birthday is forming a lucky number.</span>
            <Giphy searchTerm={"happy"} />
          </section>
        )}
      </div>
    </>
  );
};
export default BdayLuck;
