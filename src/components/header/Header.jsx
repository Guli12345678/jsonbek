import React from "react";
import "./Header.scss";
import { LINKS } from "../../static";
import Users from "../users/User";
import Products from "../products/Product";
import Posts from "../posts/Post";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h2>Jsonbek Placeholder.</h2>
          <ul className="navbar__collection">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href={<Posts />}>Posts</a>
            </li>
            <li>
              <a href={<Users />}>Users</a>
            </li>
            <li>
              <a href={<Products />}>Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
