import "./ShoppingCart.css";
import Button from "@mui/material/Button";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div className="main__cart">
      <h3 className="cart-title">Shopping Cart</h3>
      <ul className="cart__list">
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  id={item.cartId}
                  title={item.cartTitle}
                  price={item.cartPrice}
                  image={item.cartImage}
                  cuantity={item.amount}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        )}
      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€0</p>
      </div>
      <Button variant="outlined" color="error" size="large">
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCart;
