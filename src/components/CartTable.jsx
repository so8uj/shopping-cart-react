import React from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";


const CartTable = () => {

    const carts = useSelector(storeState=>storeState.CartRecuder)
    let total = 0;
    carts.forEach(item => {
        (total+= item.price * item.qty)
    });

    return (
        <>
            <table className="table table-striped table-sm align-middle">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.length > 0 ?  
                        carts.map(cart=>(
                            <CartRow key={cart.id} cart={cart} />
                        ))
                    : (
                        <tr>
                            <td className="text-danger text-center fw-bold fs-5 py-4" colSpan={6}> Empty Cart </td>
                        </tr>
                    )}
                </tbody>
            </table>

            { carts.length > 0 && (

                <div className="d-flex justify-content-end">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>Total: ${total}</h3>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            
        </>

    );
};

export default CartTable;
