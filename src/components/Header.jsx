import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/portfolio" className="nav-link">Portfólio</Link></li>
          <li><Link to="/bulls-and-cows" className="nav-link">Jogo Senha</Link></li>
          <li><Link to="/movies" className="nav-link">Filmes</Link></li> 
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
