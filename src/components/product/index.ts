import ProductCardHOC from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductName } from './ProductName';
import { ProductButtons } from './ProductButtons';
import { ProductCardType } from '../../types/ProductType';

const ProductCard: ProductCardType = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Name: ProductName,
  Buttons: ProductButtons,
});

export default ProductCard;
