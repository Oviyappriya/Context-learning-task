/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ cart }) => {
  return (
    <div className="header">
      <div className="logo">Welcome to learn more think !</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <span className="cart-count">{cart.length}</span>View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
