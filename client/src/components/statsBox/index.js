import React from 'react';

const StatsBox = ({click, text}) => {
    return(
    <div onClick={click}>{text}</div>
    )
}

export default StatsBox;