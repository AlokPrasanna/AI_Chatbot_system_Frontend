import React from 'react';

const IconButton = ({icon , style}) => {
  return (
    <button className={`${style ? style : ""}`}>
      {icon}
    </button>
  )
}

export default IconButton;
