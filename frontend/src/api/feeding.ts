import API from "./axios";

export const fetchLines = async () => {
  const response = await API.get("/lineas");
  return response.data; // Lista de lineas desde Mongo
};
export const fetchJaulas = async () => {
  const response = await API.get("/jaulas");
  return response.data; // Lista de jaulas desde Mongo
};

export const fetchSopladores = async () => {
  const response = await API.get("/sopladores");
  return response.data;  
};

export const fetchSelectores = async () => {
  const response = await API.get("/selectores");
  return response.data;  
};

export const fetchSilos = async () => {
  const response = await API.get("/silos");
  return response.data;  
};

export const fetchAlimentos = async () => {
  const response = await API.get("/alimentos");
  return response.data;  
};

export const fetchDosificadores = async () => {
  const response = await API.get("/dosificadores");
  return response.data;  
};

export const fetchCalibraciones = async () => {
  const response = await API.get("/calibraciones");
  return response.data;  
};