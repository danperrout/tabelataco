import React from "react";
import { Link } from "react-router-dom";
//import SignedInLinks from "./SignedInLinks";
//import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Tabela TACO
        </Link>
        <ul className="right">
          <li>
            <a
              href="https://github.com/danperrout/tabelataco"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório do Projeto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
