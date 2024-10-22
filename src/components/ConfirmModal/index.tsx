import React from 'react';
import { ModalContainer, ModalContent, ModalButton, ModalBackdrop } from '../ConfirmModal/styles';

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  itemId: number | null;  
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel, itemId }) => {
  return (
    <>
      <ModalBackdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCancel} 
      />
      <ModalContainer
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModalContent>
          <h2>¿Estás seguro?</h2>
          <p>¿Deseas eliminar el item con ID <strong>{itemId}</strong>?</p>
          <div>
            <ModalButton onClick={onConfirm} bgColor="#ff4d4d">
              Eliminar
            </ModalButton>
            <ModalButton onClick={onCancel} bgColor="#ccc">
              Cancelar
            </ModalButton>
          </div>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default ConfirmModal;
