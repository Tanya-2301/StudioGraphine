import { useEffect, useState } from "react";
import arrow1 from "../../assets/Arrow 1.png";
import arrow2 from "../../assets/Arrow 2.png";
import line18 from "../../assets/Line 18.png";
import star2 from "../../assets/Star 2.png";
import ProductCard from "../ProductCard/ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className="productlisting">
      <div className="listing-bar-div">
        <div>
          <p className="listing-title">New products</p>
          <img className="line-18" src={line18} alt="line-18" />
          <img className="star-2" src={star2} alt="star-2" />
        </div>
        <div>
          <img src={arrow2} className="arrow arrow-left" alt="arrow-left" />
          <img className="arrow arrow-right" src={arrow1} alt="arrow-right" />
        </div>
      </div>
      <div className="products-container" >
        <div className="product-options">
          <p>Apparel</p>
          <p className="accessories">Accessories</p>
          <p>Best sellers</p>
          <p>50% off</p>
        </div>
        <div className="product-card-container">
          {products?.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
