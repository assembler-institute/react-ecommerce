import Button from "@mui/material/Button";
import './CartItem.css';


const CartItem = ({id, title, price, image}) => {
  return (
    <div className="cart__item">
      <img className="cart__item_image" src={image} alt="" />
      <div>
        <p className="cart__item_title">{title}</p>
        <p className="cart__item_price">{price}</p>
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