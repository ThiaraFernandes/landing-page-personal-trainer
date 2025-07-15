import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: ${theme.colors.darkGray};
  color: ${theme.colors.white};
  padding: 40px 0 20px;
  border-radius: 15px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
 

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
  }
`;

export const FooterSection = styled.div``;

export const FooterTitle = styled.h4`
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  font-size: 18px;
`;

export const FooterText = styled.p`
  color: ${theme.colors.lightGray};
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: ${theme.colors.lightGray};
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;
export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${theme.colors.white};
  transition: all ${theme.transitions.default};

  &:hover {
    background: #fff;
    color:"#2D3748";
    transform: translateY(-2px);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.mediumGray};
  margin-top: 40px;
  padding-top: 16px;
  text-align: center;
  color: ${theme.colors.lightGray};
  font-size: 13px;
  line-height: 1.4;
`;

export const Logo = styled.div`
  img {
    width: 160px;
    height: auto;
    margin-bottom: 12px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;
