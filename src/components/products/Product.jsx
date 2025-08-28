import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.scss";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount

  console.log();

  return (
    <div className="products">
      <h2>Products</h2>
      {error && <div style={{ color: "red" }}>{error?.message}</div>}
      {loading && <div>Loading...</div>}
      <div className="container wrapper">
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.image} width={300} loading="lazy" alt="" />
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
