import React from 'react'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer d-flex flex-column flex-lg-row bg-black text-light p-2 p-lg-4'>

      <div className='footer-section p-2'>
         <Link to="/" className="nav-link">
            <img src={'./vite.svg'} alt="" />
         </Link>
        
      </div>

      <div className='footer-section p-3 mx-auto'>
         <div className="slogan">
            <p className='slogan-text mx-auto'>Shop confidently from your couch and discover quality finds delivered to your door. 
              Effortless shopping meets value you'll click with.
            </p>
         </div>
      </div>

      <div className='footer-section'>
        <ul className='navbar-nav d-flex flex-column gap-2 py-2 me-0 me-lg-5'>
          <Link to="/" className="nav-link link m-0 p-0">
            Home
          </Link>

          <Link to="/" className="nav-link link p-0">
            Products
          </Link>
                   
          <Link to="/" className="nav-link link p-0">
            Contact
          </Link>

          <Link to="/" className="nav-link link p-0">
            Clearance
          </Link>
        </ul>
      </div>




    </div>
  )
}
