import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API : /movie/now_playing?api_key=c950a9a89f656ce1759e1eb22b79784c&language=pt-BR

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/'
})

export default api;