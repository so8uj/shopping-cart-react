import React from "react";

const CartTable = () => {
  return (
    <table class="table table-striped table-sm align-middle">
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
            <tr>
                <th><img src="https://images.anandtech.com/doci/16488/X-T30_DSF4234_678x452.jpg" alt="" height="50px"/></th>
                <td>Samsung s21+</td>
                <td>$ 1000</td>
                <td>
                    <div class="btn-group quantity-container" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">-</button>
                        <input type="number" value={1} />
                        <button type="button" class="btn btn-primary">+</button>
                    </div>
                </td>
                <td>$ 1000</td>
                <td>
                    <button className="btn btn-sm btn-danger">X</button>
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default CartTable;
