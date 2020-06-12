import React from "react";

const Pic = ({id, dataOrderId, className, alt, src, validate}) => {
  return (
    <div className={className}>
      <img 
        id={id}
        data-order={dataOrderId}
        alt={alt} 
        src={src} 
        onClick={validate}
      />
    </div>
  );
};

export default Pic;
