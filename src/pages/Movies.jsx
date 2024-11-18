import React, { useState } from "react";
import axios from "axios";
import './Movies.css';  // Importando o arquivo CSS

function Movies() {
  const [searchTerm, setSearchTerm] = useState(""); // Armazena o termo de busca
  const [movies, setMovies] = useState([]); // Armazena os filmes retornados pela API
  const [loading, setLoading] = useState(false); // Indica se a busca está em andamento

  // Função que faz a busca de filmes
  const searchMovies = async () => {
    if (!searchTerm) return; // Não faz a busca se o campo estiver vazio

    setLoading(true); // Inicia o carregamento

    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=ab1c133`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search); // Atualiza os filmes encontrados
      } else {
        alert("Nenhum filme encontrado");
        setMovies([]); // Limpa a lista de filmes
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      alert("Erro ao buscar filmes.");
    }

    setLoading(false); // Fim do carregamento
  };

  return (
    <div className="movies-container">
      <h1 className="movies-title">Busca de Filmes</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Pesquise por filmes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={searchMovies} className="search-button">
          Buscar
        </button>
      </div>

      {loading && <p className="loading-text">Carregando...</p>}

      <div className="movies-list">
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
              alt={movie.Title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
