import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../hooks/useItems';

const ItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { items } = useItems();

  const item = items.find((item: any) => item.id === Number(id));

  if (!item) return <p>Item no encontrado</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Detalles del item...</p>
    </div>
  );
};

export default ItemDetails;
