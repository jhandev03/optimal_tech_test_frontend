import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;

  position: fixed;
  top: 40%;
  left: 34%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1001;
   @media (max-width: 768px) {
    left: 2%;
    top: 30%;
    width: 85%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #555;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const ModalButton = styled.button<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
