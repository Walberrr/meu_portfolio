import React, { useState } from "react";
import axios from "axios";

function Movies() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const searchMovies = async () => {
    if (!searchTerm) 

    setLoading(true); 

    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=ab1c133`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search); 
      } else {
        alert("Nenhum filme encontrado");
        setMovies([]); 
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      alert("Erro ao buscar filmes.");
    }

    setLoading(false); 
  };

  return (
    <div className="movies-container" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Busca de Filmes</h1>
      <input
        type="text"
        placeholder="Pesquise por filmes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <button onClick={searchMovies} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Buscar
      </button>

      {loading && <p>Carregando...</p>}

      <div className="movies-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: "20px", textAlign: "center" }}>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt={movie.Title} style={{ width: "200px", height: "300px" }} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
