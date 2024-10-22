import axios from 'axios';

const API_URL = 'https://optimal-tech-test-backend.onrender.com/items'; // Reemplaza con tu URL backend

// Obtener todos los items (GET)
export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear un nuevo item (POST)
export const createItem = async (name: string) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

// Actualizar un item existente (PUT)
export const updateItem = async (id: number, name: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
};

// Eliminar un item (DELETE)
export const deleteItem = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
