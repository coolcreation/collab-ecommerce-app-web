import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='container'>

          <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProductDetailPage;