import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaCheckCircle } from 'react-icons/fa';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  overflow: hidden;
  padding: 0 20px; 
  box-sizing: border-box;
  position: relative;
`;


export const Card = styled.div`
  background: white;
  padding: 48px 32px;
  max-width: 500px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled(FaCheckCircle)`
  font-size: 48px;
  color: ${theme.colors.primary};
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
  color: ${theme.colors.darkGray};
`;

export const Message = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 32px;
  padding: 12px 24px;
  background: ${theme.colors.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
  outline: none; 
  border: none;

  &:hover {
    background: #258e4f;
    color: white; 
  }

  &:focus,
  &:active {
    outline: none;
    color: white;
  }
`;

