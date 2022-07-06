import Button from "@mui/material/Button";

const CartItem = () => {
  return (
    <div className="cart__item">
      <img src="" alt="" />
      <div>
        <p className="cart__item_title"></p>
        <p className="cart__item_price"></p>
        <div className="cart__item_bottom"></div>
        <Button variant="contained">-</Button>
        <p></p>
        <Button variant="contained">+</Button>
        <Button variant="contained">Remove</Button>
      </div>
    </div>
  );
};
export default CartItem;