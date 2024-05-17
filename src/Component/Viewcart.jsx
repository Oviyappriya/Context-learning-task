/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import "./Viewcart.css";
import { cartContext } from "../App";
// eslint-disable-next-line no-unused-vars
const Viewcart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.courseamt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.image} alt="image" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>{product.courseamt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-amt">Total Amount:{total}</h2>
    </>
  );
};
export default Viewcart;
