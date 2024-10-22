import { useState, useEffect } from 'react';
import { getItems, createItem, updateItem, deleteItem } from '../services/itemsServices';

interface Item {
  id: number;
  name: string;
}

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError('Error al obtener los items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addItem = async (name: string) => {
    try {
      const newItem = await createItem(name);
      setItems([...items, newItem]);
    } catch (err) {
      setError('Error al crear item');
    }
  };

  const editItem = async (id: number, name: string) => {
    try {
      const updatedItem = await updateItem(id, name);
      setItems(items.map(item => (item.id === id ? updatedItem : item)));
    } catch (err) {
      setError('Error al actualizar item');
    }
  };

  const removeItem = async (id: number) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError('Error al eliminar item');
    }
  };

  return { items, loading, error, addItem, editItem, removeItem };
};

export default useItems;
