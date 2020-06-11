import React from "react";
import Pic from "../pic";

const Card = ({order, id, correct, wrong, validate}) => {

  return (
    <div id={id} className='bingoCard'>
      {
        order.map(pic => {
          return (
            <Pic 
            key={pic.id} 
            id={pic.id} 
            className={correct.includes(pic.id) ? 'bingoPic-correct' : wrong.includes(pic.id) ? 'bingoPic-wrong' : 'bingoPic'} 
            alt={pic.name} 
            src={pic.url} 
            validate={validate}
            />
          )
        })
      }
    </div>
  )

};

export default Card;
