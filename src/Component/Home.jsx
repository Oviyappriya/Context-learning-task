import { useState } from "react";
import data from "./data.json";
import Product from "./Product";
import "./Home.css";
// eslint-disable-next-line react/prop-types
const Home = () => {
  const [products] = useState(data);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
