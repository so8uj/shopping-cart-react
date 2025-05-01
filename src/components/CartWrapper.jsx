import React from 'react'
import CartTable from './CartTable'

const CartWrapper = () => {
  return (
    <section className="cart-wrapper">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <CartTable />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CartWrapper