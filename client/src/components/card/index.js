import React, { useState } from "react";

import Pic from "../pic";

const pics = require("../../foods");

const Card = props => {
  return pics.map(pic => {
    return (
      <Pic key={pic.name} className='bingoPic' alt={pic.name} src={pic.url} />
    );
  });
};

export default Card;
