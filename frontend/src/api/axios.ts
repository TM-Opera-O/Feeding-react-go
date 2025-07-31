import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // o IP del backend si está en otro equipo
  withCredentials: true, // si usas cookies para login
});

export default API;
