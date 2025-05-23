import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../users/context/ShoppingCartContext';

const ProductCard = ({ product }) => {
  const { useCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer">
          <p>
            Price: ${product.price}
            </p>
            <p>Reviews: {product.reviews.length}</p>
            <p>Average Rating: {
              product.reviews.reduce((acc, review) => acc + review.rating, 0) /
                product.reviews.length
              }</p>
          <button 
          className="btn btn-primary"
          onClick= {() => addToCart(product)}
          >
            Add to Cart
          </button>
             <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
