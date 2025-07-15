import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import 'react-datepicker/dist/react-datepicker.css';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.darkGray};
    line-height: 1.6;
    overflow-x: hidden;
    max-width: 100vw;
    display: flex;
    justify-content: center; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.fontSizes.h1.desktop};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.h1.mobile};
    }
  }

  h2 {
    font-size: ${theme.fontSizes.h2.desktop};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.h2.mobile};
    }
  }

  h3 {
    font-size: ${theme.fontSizes.h3.desktop};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.h3.mobile};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    box-shadow: none;
  }

  button:focus,
  button:focus-visible,
  button:active {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 16px;
      max-width: 100%;
    }
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: 12px 24px;
  border-radius: ${theme.borderRadius.small};
  font-weight: 500;
  font-size: ${theme.fontSizes.body};
  transition: all ${theme.transitions.default};
  cursor: pointer;
  border: 2px solid transparent;
  max-width: 100%;
  box-sizing: border-box;

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${theme.colors.gradient};
          color: ${theme.colors.white};
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: ${theme.shadows};
          }
        `;
      case 'secondary':
        return `
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      default:
        return '';
    }
  }}

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
    padding: 14px 20px;
    margin: 0 auto;
    display: block;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.light};
  padding: 24px;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.medium};
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  border-radius: ${theme.borderRadius.large};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 48px;
  color: ${theme.colors.darkGray};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 32px;
  }
`;

// Estilos específicos para o DatePicker centralizado
export const DatePickerStyle = createGlobalStyle`
  .react-datepicker-popper {
    z-index: 9999 !important;
    transform: none !important;
  }
  
  .react-datepicker__portal {
    z-index: 9999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 20px !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  .react-datepicker__portal .react-datepicker {
    position: relative !important;
    transform: none !important;
    margin: 0 auto !important;
    display: block !important;
  }

  /* Garantir que o calendário ocupe toda a largura disponível */
  .react-datepicker__portal .react-datepicker__month-container {
    width: 100% !important;
  }

  /* Centralizar o calendário quando não estiver no portal */
  .react-datepicker-wrapper {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }

  .react-datepicker__input-container {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
`;