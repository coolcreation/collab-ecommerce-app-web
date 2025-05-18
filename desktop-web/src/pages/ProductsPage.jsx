import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    image: 'https://example.com/product1.jpg',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    image: 'https://example.com/product2.jpg',
    price: 9.99,
  },
];


const ProductsPage = () => {
    return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage