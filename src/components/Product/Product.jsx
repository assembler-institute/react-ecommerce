import "./Product.css";
import Button from "@mui/material/Button";

const Product = ({
  id,
  title,
  price,
  image,
  amount,
  valoration,
  description,
  cart,
  setCart,
}) => {
  const addToCart = () => {
    setCart([
      ...cart,
      { cartId: id, cartTitle: title, cartPrice: price, cartImage: image },
    ]);
  };

  return (
    <div className="product__container">
      <img className="product__container_img" src={image} alt="img" />
      <p className="product__container_title">{title}</p>
      <span className="product__container_rating">
        {valoration}⭐️⭐️⭐️⭐️⭐️
      </span>
      <p className="product__container_description">{description}</p>
      <div className="product__bottom">
        <p className="product__bottom_price">{price}</p>
        <Button
          variant="contained"
          className="product__bottom_buttonAdd"
          onClick={addToCart}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

export default Product;
