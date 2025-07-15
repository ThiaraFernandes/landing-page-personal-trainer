import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { Card } from '../../styles/GlobalStyles';


// Animação de pulsar
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;



export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  width: 100%;
  align-items: start;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 16px;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

export const ContactForm = styled(Card)`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 24px 16px;
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const FormTitle = styled.h3`
  color: ${theme.colors.darkGray};
  margin-bottom: 24px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${theme.colors.darkGray};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.small};
  font-size: 16px;
  transition: border-color ${theme.transitions.default};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.mediumGray};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 14px 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.small};
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color ${theme.transitions.default};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.mediumGray};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 14px 16px;
    min-height: 100px;
  }
`;


export const BadgeSection = styled.div`
  /* margin-top: auto; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 70px;
`;

export const BadgeImage = styled.img`
  width: 80px;
  height: auto;
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

export const BadgeText = styled.p`
  color: ${theme.colors.mediumGray};
  font-size: 18px;
  max-width: 220px;
`;


export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContactCard = styled(Card)`
  padding: 32px;
  text-align: center;
`;

export const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.gradient};
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${theme.colors.white};
`;

export const ContactTitle = styled.h4`
  color: ${theme.colors.darkGray};
  margin-bottom: 8px;
`;

export const ContactText = styled.p`                  
  color: ${theme.colors.mediumGray};
  margin-bottom: 16px;
`;

export const ContactLink = styled.a`
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.darkGray};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background: ${theme.colors.lightGray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${theme.colors.primary};
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`;

export const SuccessMessage = styled.div`
  background: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: 12px 16px;
  border-radius: ${theme.borderRadius.small};
  margin-bottom: 20px;
  text-align: center;
`;
