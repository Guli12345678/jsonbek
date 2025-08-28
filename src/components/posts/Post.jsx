import axios from "axios";
import React, { useEffect, useState } from "react";
import "../posts/Post.scss";

const Posts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/posts?style=romance")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount

  return (
    <div className="posts">
      <h2>Posts</h2>
      {error && <div style={{ color: "red" }}>{error?.message}</div>}
      {loading && <div>Loading...</div>}
      <div className="container wrapper">
        {data?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h3>{item.body}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
