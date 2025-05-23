import { useEffect, useState } from 'react'

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
            <a href="/user/cart" className="btn btn-outline-primary">View Cart</a>
            <a href="/user/orders" className="btn btn-outline-secondary">Past Orders</a>
            <a href="/user/profile" className="btn btn-outline-info">Profile</a>
          </div>

          {orderMessage}
        </div>
      </div>
    </>
  )
}
