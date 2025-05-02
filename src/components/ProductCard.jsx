import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
    const {product} = props
    const dispatch = useDispatch()
    return (
        <div className="col-lg-3">
            <div className="card product-card">
                <img
                    src={product.img}
                    className="card-img-top object-fit-cover"
                    alt={product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold">
                        <i>Price: </i> ${product.price}
                    </p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>dispatch({type:"cart/addToCart",payload: product})}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
