import products from '../products';
import CounterApp from './CounterApp';
import ProductCard from './ProductCard';
import './productCard.css'

const Products = () => {

  

  return (
    <>
      <h1>Products</h1>
      { products.map(product => (
        <ProductCard key={product.id}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <img className='product__img' src={product.img} alt={product.title} />
        <CounterApp />
        </ProductCard>
        ))}
    </>
  )
}

export default Products;