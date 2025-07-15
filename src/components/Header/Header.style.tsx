import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from '../../styles/GlobalStyles';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.light};
  z-index: 1000;
  transition: all ${theme.transitions.default};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Logo = styled.div`
  img{
    height: 105px;

    @media (max-width: ${theme.breakpoints.mobile}) {
      height: 45px;
    }
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 240px;
    background: ${theme.colors.white};
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform ${theme.transitions.default};
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-weight: 500;
  color: ${theme.colors.darkGray};
  transition: color ${theme.transitions.default};
  cursor: pointer;
  padding-bottom: 2px;

  &:hover {
    color: ${theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const HamburgerLine = styled.span<{ isOpen: boolean; index: number }>`
  width: 24px;
  height: 2px;
  background: ${theme.colors.darkGray};
  transition: all ${theme.transitions.default};
  transform-origin: center;

  ${({ isOpen, index }) => {
    if (isOpen) {
      if (index === 0) return 'transform: rotate(45deg) translate(6px, 6px);';
      if (index === 1) return 'opacity: 0;';
      if (index === 2) return 'transform: rotate(-45deg) translate(6px, -6px);';
    }
    return '';
  }}
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: all ${theme.transitions.default};
    z-index: 999;
  }
`;

export const CTAButton = styled(Button)`
  outline: none;
  box-shadow: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: auto;
    margin-top: 16px;
   }
`;