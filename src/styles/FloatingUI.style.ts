import styled from 'styled-components';
import { theme } from './theme';

export const FloatButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1100;
`;

export const FloatButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  &:hover {
    background-color: ${theme.colors.success};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1099;
  display: flex;
  justify-content: center;
  align-items: center;
`;
