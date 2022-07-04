import './productCard.css';

const ProductCard = ({ children }) => {
  return (
    <div className='card'>
     {children}
    </div>
  )
}

export default ProductCard