import products from '../db/products.json';
import ProductCard from '../components/product';

export const ShoppingInitialState = () => {
  return (
    <>
      <h2>Initial State + Function Child, Render Props</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} className='bg-dark' initialValues={{ count: 3, maxCount: 10 }}>
            {({ reset, count, isMaxCountReached, increaseBy, maxCount }) => (
              <>
                <ProductCard.Image />
                <ProductCard.Name className='text-white' />
                <ProductCard.Buttons className='text-white btn-dark' />
                <button onClick={reset}>Restear</button>
                <button onClick={() => increaseBy(-2)}> -2 </button>
                {!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>}
                <span>{count}</span>
              </>
            )}
          </ProductCard>
        ))}
      </div>
    </>
  );
};
