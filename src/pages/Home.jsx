import React from "react";
import "./Home.css"; 

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Meu Currículo / Portfólio</h1>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li><a className="home-nav-item" href="/portfolio">Meu Portfólio</a></li>
          <li><a className="home-nav-item" href="/bulls-and-cows">Jogo Senha</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

  