import { Link } from 'react-router-dom'

export default function UserDashboard() {
    
  let orderMessage
    orderMessage = (
      <h3>No orders</h3>
    )

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="text-center fs-3 my-4">Dashboard</h1>

          <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
            <Link to="/user/cart" className="btn btn-outline-primary">View Cart</Link>
            <Link to="/user/orders" className="btn btn-outline-secondary">Past Orders</Link>
            <Link to="/user/profile" className="btn btn-outline-info">Profile</Link>
          </div>

          {orderMessage}
        </div>
      </div>
    </>
  )
}
