import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.scss";

const Users = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/users?style=romance")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount

  return (
    <div className="users">
      <h2>Users</h2>
      {error && <div style={{ color: "red" }}>{error?.message}</div>}
      {loading && <div>Loading...</div>}
      <div className="container wrapper">
        {data?.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.bio}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
