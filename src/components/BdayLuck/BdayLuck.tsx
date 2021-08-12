import { useState } from "react";
import Giphy from "../Giphy";
import PrivacyNotice from "../PrivacyNotice";
import "./BdayLuck.css";
const BdayLuck = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [isLucky, setIsLucky] = useState(true);

  const validateAmount = (e: number): boolean => isNaN(e) || e < 1;

  const onBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const billAmt = parseFloat(event.target.value);

    if (validateAmount(billAmt)) {
      setBillAmount(billAmt);
      return;
    }
  };
  return (
    <>
      <PrivacyNotice />

      <div className="bcard">
        <header className="head">Input Bday</header>
        <section className="instruction">Enter your birth date</section>
        <label>
          <section className="label"> Birth Date</section>
          <input type="date" onChange={() => {}} />
        </label>
        <label>
          <section className="label"> Bill Amount:</section>
          <input
            type="number"
            value={billAmount}
            onChange={onBillAmountChange}
          />
        </label>
        <button>CHECK</button>
        <section>
          <span>Hard luck! Your Birthday is not forming a lucky number.</span>
          <Giphy searchTerm={"sad"} />
        </section>
      </div>
    </>
  );
};
export default BdayLuck;
