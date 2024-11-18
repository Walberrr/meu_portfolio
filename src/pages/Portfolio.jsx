import React from "react";
import "./Portfolio.css"; 
import minhaFoto from "../img/imagem1.jpg"; 


function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <div className="portfolio-photo">
        <img src={minhaFoto} alt="Minha Foto" className="portfolio-img" />
        </div>
        <h1 className="portfolio-name">Walbert Pereira de Lima</h1>
        <p className="portfolio-text">
          Olá, sou Walbert Pereira, estudante de Sistemas para Internet pela Universidade Católica de Pernambuco e atualmente estou no terceiro período. 
          Tenho me mais aprofundado mais na área de Análise de dados, assim como também UX Designer
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
