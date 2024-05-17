/* eslint-disable react/prop-types */

import "./Product.css";
import { cartContext } from "../App.jsx";
import { useContext } from "react";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <h5>Course Amt:{product.courseamt}</h5>
        {cart.includes(product) ? (
          <button onClick={removeCart} className="btn-remove">
            Remove to Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
export default Product;
