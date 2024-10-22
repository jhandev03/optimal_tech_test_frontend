import axios from 'axios';

// Acceder a la URL de la API desde las variables de entorno
const API_URL = `${import.meta.env.VITE_API_URL}/items`;

export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (name: string) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const updateItem = async (id: number, name: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
};

export const deleteItem = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
