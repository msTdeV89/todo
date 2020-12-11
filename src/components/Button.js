import React from "react";

const Button = ({ text, type, width, fz, padding, func, cls, br }) => {
  return (
    <button
      className={cls}
      style={{ width, fontSize: fz, padding, borderRadius: br }}
      type={type ? type : null}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default Button;
