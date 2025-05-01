import React from "react";

const ProductCard = (props) => {
    const {product} = props
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
                    <a className="btn btn-primary btn-sm">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
