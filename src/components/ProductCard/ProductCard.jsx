import group19 from "../../assets/Group 19.png";

const ProductCard = ({ product }) => {
  return (
    <div className="product-div">
      <div
        className="product-img-div"
        style={{
          backgroundImage: `url(${product?.image})`,
        }}
      >
        <img className="group" src={group19} alt="group-19" />
      </div>
      <div>
        <p className="product-title">{product?.title}</p>
        <p className="product-descp">{product?.description.slice(0, 90)}</p>
        <p className="product-price">${product?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
