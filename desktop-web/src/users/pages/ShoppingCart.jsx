import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/ShoppingCartContext";

export default function ShoppingCart () {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (isLoading) {
    return <div className="text-center my-5">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="main-container">
        <div className="container">
          <h2 className="text-center fs-3 my-4">My Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center">Cart Empty</p>
          ) : (
            <>
              <div className="row gy-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="col-md-6">
                    <div className="card p-3 shadow-sm">
                      <div className="text-center fs-5 fw-bold">
                        {item.name}
                      </div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid mx-auto d-block my-3"
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                      />
                      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                        <button
                          className="btn btn-primary"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <div>
                          <div className="text-muted">Quantity</div>
                          <div className="fw-bold">{item.quantity}</div>
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-secondary w-100"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center my-4 fs-4 fw-bold">
                Total: ${cartItems.reduce((total, item) => 
                  total + item.price * item.quantity, 0).toFixed(2)}
              </div>
            </>
          )}
          <div className="text-center mt-4">
            <Link to='/user-dashboard' className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
