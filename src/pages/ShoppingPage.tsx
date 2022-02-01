import ProductCard from '../components/product';
import { ProductType } from '../types/ProductType';
import '../styles/custom-styles.css';
const products: ProductType[] = [
  {
    id: 'b801a022-1870-47ef-b43f-47d406a67399',
    name: 'People',
    price: 2.5,
    image: 'http://placeimg.com/640/480',
    description: 'The best book about coffee',
  },
  {
    id: 'b6d1c01a-6070-44eb-81d3-2680926cb889',
    name: 'Technologie',
    price: 3.5,
    image: 'https://placeimg.com/640/480/tech',
    description: 'The best book about coffee',
  },
  {
    id: 'b6d1c01a-6070-44eb-81d3-2680926cb810',
    name: 'Architecture',
    price: 150.02,
    image: 'https://placeimg.com/640/480/arch',
    description: 'The best book Architecture',
  },
  {
    id: 'b6d1c01a-6070-44eb-81d3-2680926cb811',
    name: 'Nature',
    price: 23.5,
    image: 'http://placeimg.com/640/480/nature',
    description: 'The best book Nature',
  },
];

const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Page</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} className='bg-dark'>
            <ProductCard.Image />
            <ProductCard.Name className='text-white' />
            <ProductCard.Buttons className='text-white btn-dark' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
