import axios from "axios";
import React, { useEffect, useState } from "react";
import happy from "../gif/happy.webp";
import hbd from "../gif/hbday.webp";
import sad from "../gif/sad.webp";

const Giphy = ({ searchTerm }: { searchTerm: string }) => {
  const [error, setError] = useState(true);
  const [imgUrl, setImgUrl] = useState("");

  // this is random key on internet V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E
  // this is officially pubic key   dc6zaTOxFJmzC

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&api_key=V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E&weirdness=1`
      )
      .then((data) => {
        // console.log("t1");
        // console.log(JSON.stringify(data.data));
        setImgUrl(data.data.data.images.fixed_height.url);
        // console.log("t1.5");
        console.log(imgUrl);
        setError(true);
        // console.log("t2");
      })
      .catch((data) => {
        // console.log(data);

        if (searchTerm == "bday") setImgUrl(String(hbd));
        else if (searchTerm == "sad") setImgUrl(String(sad));
        else if (searchTerm == "happy") setImgUrl(String(happy));
        else setImgUrl("random");
      });
  }, []);
  return (
    <>
      <div>
        {console.log(imgUrl + "ddd")}
        {error ? (
          <img className="gif" alt="Gif" src={imgUrl} />
        ) : (
          <img className="gif" alt="Gif" src={imgUrl} />
        )}
      </div>
    </>
  );
};

export default Giphy;
