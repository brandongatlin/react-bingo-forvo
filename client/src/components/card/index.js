import React, { useState, useEffect } from "react";

import Pic from "../pic";

const pics = require("../../foods");

const Card = props => {
  const [randomizedPix, setRandomized] = useState([]);

  const randomizer = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }

    useEffect(() => {
      return setRandomized(data);
    });
  };

  // import start, then use it to call randomizer/start game & randomizer
  randomizer(pics);

  return randomizedPix.map(pic => {
    return (
      <Pic key={pic.name} className='bingoPic' alt={pic.name} src={pic.url} />
    );
  });
};

export default Card;
