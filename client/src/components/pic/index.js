import React from "react";

const Pic = props => {
  return (
    <div className='picContainer'>
      <img className={props.className} alt={props.alt} src={props.src} />
    </div>
  );
};

export default Pic;
