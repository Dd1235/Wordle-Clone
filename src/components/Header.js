import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Wordle</h1>
      <nav>
        <Link to="/" className="home-link">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
