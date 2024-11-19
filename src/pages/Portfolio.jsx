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
          Tenho me mais aprofundado mais na área de Análise de dados, assim como também UX Designer.
        </p>
      </div>

      <div className="portfolio-section">
        <h2 className="section-title">Tecnologias usadas por mim</h2>
        <ul className="tech-list">

          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Power Bi</li>
          <li>Python</li>
          <li>PSPP</li>
        </ul>
      </div>

      <div className="portfolio-section">
        <h2 className="section-title">Meus Projetos</h2>
        <p>
          Confira meus projetos no GitHub clicando no link abaixo:
        </p>
        <a
          href="https://github.com/walberrr"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Meu GitHub
        </a>
      </div>

      <div className="portfolio-section">
        <h2 className="section-title">Atividades Voluntárias</h2>
        <p>

          Participei como voluntário no evento <strong>Rec'n'Play</strong>, contribuindo com organização e suporte em atividades voltadas para tecnologia e inovação. 
          Além disso, estive presente na <strong>Jornada de Sistemas para Internet</strong>, auxiliando na execução de oficinas e palestras para estudantes e profissionais da área.
        </p>
      </div>

      <div className="portfolio-section">
        <h2 className="section-title">Conecte-se comigo</h2>
        <p>
          Entre no meu LinkedIn para me acompanhar:
        </p>
        <a
          href="https://www.linkedin.com/in/walbert-pereira-359714181"
          target="_blank"
          
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          Meu LinkedIn
        </a>

      </div>
    </div>
  );
}

export default Portfolio;
