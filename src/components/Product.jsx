import './Product.css'

const Product = ({title}) => {
  return (
    <div className='product__container'>
      <span className='product__container_discount'>56%</span>
     <img className='product__container_img' src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75" alt="img" />
     <p className='product__container_title'>{title}</p>
      <span className='product__container_rating'>⭐️⭐️⭐️⭐️⭐️</span>
      <p className='product__container_description'>Description</p>

      <div className='product__bottom'>
      <p className='product__bottom_price'>$80</p>
      <button className='product__bottom_buttonAdd'>Add</button>
      </div>

    </div>
  )
}

export default Product