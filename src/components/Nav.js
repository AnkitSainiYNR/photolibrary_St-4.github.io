import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Photo Gallery</h1>
      <ul>
        <li>
          <Link to="/photolibrary/">Home</Link>
        </li>
        <li>
          <Link to="/photolibrary/about">About</Link>
        </li>
        <li>
          <Link to="/photolibrary/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
