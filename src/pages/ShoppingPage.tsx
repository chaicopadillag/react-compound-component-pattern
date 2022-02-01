import ProductCard from '../components/product';
import products from '../db/products.json';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
  const { cartState, onChangeCounterCard } = useShoppingCart();

  return (
    <>
      <div>
        <h2>Shopping Page</h2>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} count={cartState[product.id]?.count || 0} className='bg-dark' onChange={onChangeCounterCard}>
              <ProductCard.Image />
              <ProductCard.Name className='text-white' />
              <ProductCard.Buttons className='text-white btn-dark' />
            </ProductCard>
          ))}
        </div>
      </div>
      <div className='shopping-cart'>
        <h2 style={{ width: '100%' }}>Cart</h2>
        {Object.entries(cartState).map(([key, prod]) => (
          <ProductCard product={prod} key={key} count={prod.count} onChange={onChangeCounterCard} className='bg-dark' style={{ width: '150px' }}>
            <ProductCard.Image />
            <ProductCard.Name className='text-white' />
            <ProductCard.Buttons className='text-white btn-dark' />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ShoppingPage;
