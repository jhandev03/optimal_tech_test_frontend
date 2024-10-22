import React, { useState } from 'react';
import { FormContainer, Title, Form, Input, Button, ItemList, Item, DeleteButton, EditButton, BoxButton } from '../ItemForm/styles';
import useItems from '../../hooks/useItems';
import ConfirmModal from '../ConfirmModal';

const ItemForm: React.FC = () => {
  const { items, addItem, editItem, removeItem, loading, error } = useItems();
  const [newItemName, setNewItemName] = useState('');
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    if (editingItemId) {
      editItem(editingItemId, newItemName);
    } else {
      addItem(newItemName);
    }

    setNewItemName('');
    setEditingItemId(null);
  };

  const handleEditClick = (id: number, name: string) => {
    setEditingItemId(id);
    setNewItemName(name);   
  };

  const handleDeleteClick = (id: number) => {
    setItemToDelete(id);  
    setShowModal(true);   
  };

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      removeItem(itemToDelete);  
    }
    setShowModal(false);  
  };

  const cancelDelete = () => {
    setShowModal(false);  
  };

  return (
    <FormContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Check Items
      </Title>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <Form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Input
          type="text"
          placeholder="¡Ingresa el item que quieres crear!"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {editingItemId ? 'Actualizar Item' : 'Agregar Item'}
        </Button>
      </Form>

      {/* Mostrar la lista de items */}
      <ItemList>
        {items.map((item) => (
          <Item
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Mostrar el ID y el nombre del item */}
            <div>
              <strong>ID:</strong> {item.id} - {item.name}
            </div>
            <BoxButton>
              <EditButton
                onClick={() => handleEditClick(item.id, item.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Editar
              </EditButton>
              <DeleteButton
                onClick={() => handleDeleteClick(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Eliminar
              </DeleteButton>
            </BoxButton>
          </Item>
        ))}
      </ItemList>

      {/* Modal de Confirmación */}
      {showModal && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          itemId={itemToDelete}  
        />
      )}
    </FormContainer>
  );
};

export default ItemForm;
