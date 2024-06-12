import React from 'react';

const InputBox = ({type , style , placeholder }) => {
  return (
    <input type={type} className={`${style ? style : ""}`} placeholder={placeholder} />
  )
}

export default InputBox;
