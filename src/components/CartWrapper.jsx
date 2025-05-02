import React from 'react'
import CartTable from './CartTable'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CartWrapper = () => {
  const dispatch = useDispatch()
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
          <div className='mt-3'>
            <Link to={`/`} className="btn btn-primary">Shop Page</Link>
            <button onClick={()=>dispatch({type:"cart/resetCart"})} type="button" className="btn btn-danger ms-3">X Empty Cart</button>
          </div>
        </div>
      </section>
  )
}

export default CartWrapper