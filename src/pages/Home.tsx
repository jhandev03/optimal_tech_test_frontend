import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';

const Home: React.FC = () => {
  const { items, loading, error } = useItems();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los items: {error}</p>;

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
