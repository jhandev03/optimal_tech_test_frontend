import styled from 'styled-components';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

export const FormContainer = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1e88e5, #00d4ff);
`;

export const Title = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;

  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled(motion.form)`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Input = styled(motion.input)`
  font-family: 'Montserrat', sans-serif;
  padding: 15px;
  font-size: 18px;
  border: 2px solid #1e88e5;
  border-radius: 8px;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #00d4ff;
  }
`;

export const Button = styled(motion.button)`
  font-family: 'Montserrat', sans-serif;

  background-color: #1e88e5;
  color: white;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ItemList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  width: 100%;
  max-width: 400px;
`;

export const Item = styled(motion.li)`
  background-color: #fff;
  border: 2px solid #1e88e5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;

export const DeleteButton = styled(motion.button)`
  background-color: #ff4d4d;
  color: white;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0000;
  }
`;

export const EditButton = styled(motion.button)`
  background-color: #ffb347;
  color: white;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8c00;
  }
`;
export const BoxButton = styled(div)`
  font-family: 'Montserrat', sans-serif;

  display: flex;
  align-items: center;
  gap: 10px;
`;