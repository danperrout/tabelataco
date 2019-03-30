import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <a
          href="https://github.com/danperrout/tabelataco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação
        </a>
      </li>
      <li>
        <NavLink to="/">Novo Projeto</NavLink>
      </li>
      <li>
        <NavLink to="/">Sair</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          DP
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
