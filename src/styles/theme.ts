export const theme = {
  colors: {
    primary: '#169A34',
    white: '#FFFFFF',
    textBase: '#fcfdfdff',
    lightGray: '#F8F9FA',
    darkGray: '#2D3748',
    mediumGray: '#718096',
    success: '#68D391',
    gradient: 'linear-gradient(135deg, #169A34 0%, #57C785 100%)',
  },
  
  fonts: {
    primary: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },

  fontSizes: {
    h1: {
      desktop: '48px',
      mobile: '32px',
    },
    h2: {
      desktop: '36px',
      mobile: '28px',
    },
    h3: {
      desktop: '24px',
      mobile: '20px',
    },
    body: '16px',
    small: '14px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
  },
  shadows: {
    light: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    default: '0.3s ease',
  },
};

export type Theme = typeof theme;

