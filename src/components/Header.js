import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/" className="title-link">
          Wordle Clone
        </Link>
      </h1>
    </header>
  );
};

export default Header;
