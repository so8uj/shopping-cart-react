import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/products")
            .then(res=>res.json())
            .then(data=>{setProducts(data)})
    },[])
    return (
        <section className="product-container">
        <div className="container">
            <div className="row">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
        </section>
    );
};

export default ProductContainer;
