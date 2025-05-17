import React from 'react'

export default function SubFooter() {
  return (
    <div class="sub-footer d-flex flex-column-reverse flex-lg-row p-3">
        
        <div className='sub-footer-section mx-auto py-2'>
            <p className='p-0 m-0'>Ecommerce Shop @ 2025</p>
        </div>

        <div className='sub-footer-section mx-auto py-2'>
            <img src={"./payment-methods.png"} alt="payment_methods_image" />
        </div>

    </div>
  ) 
}   
