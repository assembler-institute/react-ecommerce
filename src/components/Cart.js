import React from "react";

import ShoppingCartItem from "./ShoppingCartItem";
import CheckoutButton from "./CheckoutButton";

function getTotal(cart) {
  return cart.reduce((accum, curr) => {
    return accum + curr.price * curr.quantity;
  }, 0);
}

function Cart({ cartItems, handleRemove, handleChange }) {
  return (
    <aside className="col col-6 col-lg-4 p-4">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              handleRemove={() => handleRemove(item.id)}
              handleChange={(event) => handleChange(event, item.id)}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <CheckoutButton>Checkout</CheckoutButton>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
