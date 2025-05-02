import React from 'react'
import { useDispatch } from 'react-redux'


const CartRow = ({cart}) => {
    const dispatch = useDispatch()
  
    return (
        <tr>
            <th><img src={cart.img} alt={ cart.name } height="50px"/></th>
            <td>{ cart.name }</td>
            <td>$ { cart.price }</td>
            <td>
                <div className="btn-group quantity-container" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={()=>dispatch({type:"cart/incDec",payload:{id:cart.id,"type":"Decrement"}})}>-</button>
                    <input type="number" value={cart.qty} onChange={(e)=>dispatch({type:"cart/updateQty",payload:{id:cart.id,qty: Number(e.target.value)}})} />
                    <button type="button" className="btn btn-primary" onClick={()=>dispatch({type:"cart/incDec",payload:{id:cart.id,"type":"Increment"}})}>+</button>
                </div>
            </td>
            <td>$ { cart.price * cart.qty }</td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={()=>dispatch({type:"cart/removeCart",payload:cart.id})}>X</button>
            </td>
        </tr>
    )
}

export default CartRow