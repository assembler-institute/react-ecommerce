import './Product.css'

const Product = ({title, price, image, amount, valoration, description}) => {
  return (
    <div className='product__container'>

     <img className='product__container_img' src={image} alt="img" />

     <p className='product__container_title'>{title}</p>

      <span className='product__container_rating'>{valoration}⭐️⭐️⭐️⭐️⭐️</span>

      <p className='product__container_description'>{description}</p>

      <div className='product__bottom'>
      <p className='product__bottom_price'>{price}</p>
      <button className='product__bottom_buttonAdd'>Buy</button>
      </div>

    </div>
  )
}

export default Product