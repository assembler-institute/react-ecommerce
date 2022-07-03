import React from "react";

function CheckoutButton({ type = "button", children, ...props }) {
  return (
    <button type={type} {...props} className="btn btn-primary btn-block btn-lg">
      {children}
    </button>
  );
}

export default CheckoutButton;
