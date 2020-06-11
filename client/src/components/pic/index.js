import React from "react";

const Pic = ({id, className, alt, src, validate}) => {
  return (
    <div className={className}>
      <img 
      id={id}
      alt={alt} 
      src={src} 
      onClick={validate}
      />
    </div>
  );
};

export default Pic;
