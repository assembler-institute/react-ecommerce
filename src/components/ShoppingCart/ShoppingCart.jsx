import Button from "@mui/material/Button";
import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="main__cart">
      <h3>ShoppingCart</h3>
      <ul className="cart__list"></ul>
      {cart.map((item, index)=>{
        return <CartItem />
      })}
      <div className="cart__buttom">
        <p className="cart__total">Total:</p>
        <p className="cart__totalPrice">$0</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
