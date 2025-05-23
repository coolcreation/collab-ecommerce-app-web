import React from "react";
import { useParams } from "react-router-dom";
import products from "../staticData/products";
import { useCart } from "../users/context/ShoppingCartContext";



// const products = [
//   {
//     id: 1,
//     name: "MSI Gaming Laptop",
//     description: "Perfect for Professional Gamers needing portability",
//     image: "/sample-product-1.jpg",
//     price: 1099.99,
//     reviews: [
//       {
//         user: "John Doe",
//         rating: 5,
//         comment: "Great gaming laptop! Highly recommend.",
//       },
//       {
//         user: "Jane Smith",
//         rating: 4,
//         comment: "Very good, but could be better.",
//       },
//     ]
//   },
//   {
//     id: 2,
//     name: "MSI Laptop",
//     description: "Perfect all around laptop for gamers and students",
//     image: "/sample-product-2.jpg",
//     price: 899.99,
//     reviews: [
//       {
//         user: "John Doe",
//         rating: 5,
//         comment: "Great student laptop! Highly recommend.",
//       },
//       {
//         user: "Jane Smith",
//         rating: 4,
//         comment: "Very good, but could be better.",
//       },
//     ]
//   },
// ];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const {addToCart} = useCart();

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="container">
      
      <div className="container main-container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} style={{maxWidth: '400px'}}/>
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            {product.categories.map((category, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {category}
              </span>
            ))}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <button 
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
            Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="container main-container mt-4">
        <h2>Reviews</h2>
        <div className="row">
          {product.reviews.map((review, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{review.user}</h5>
                  <p className="card-text">Rating: {review.rating}</p>
                  <p className="card-text">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
