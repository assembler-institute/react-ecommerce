import React from "react";

function Button({ type = "button", children, ...props }) {
  return (
    <button type={type} {...props} className="btn btn-dark">
      {children}
    </button>
  );
}

export default Button;
