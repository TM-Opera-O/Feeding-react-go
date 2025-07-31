import API from "./axios";

export const login = async (email: string, password: string) => {
  const response = await API.post("/login", { email, password });
  return response.data;
};
