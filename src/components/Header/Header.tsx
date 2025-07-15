import React, { useState } from 'react';

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  HamburgerButton,
  CTAButton,
  Overlay,
  HamburgerLine
} from './Header.style';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo onClick={() => handleNavClick('hero')}>
            <img src="/assets/images/logo.png" alt="personal Logo"/>
          </Logo>
          
          <Nav isOpen={isMenuOpen}>
            <NavLink onClick={() => handleNavClick('about')}>Sobre</NavLink>
            <NavLink onClick={() => handleNavClick('services')}>Serviços</NavLink>
            <NavLink onClick={() => handleNavClick('results')}>Resultados</NavLink>
            <NavLink onClick={() => handleNavClick('contact')}>Contato</NavLink>
            <CTAButton variant="primary" onClick={() => handleNavClick('contact')}>
              Agendar aula
            </CTAButton>
          </Nav>

          <HamburgerButton onClick={toggleMenu}>
            <HamburgerLine isOpen={isMenuOpen} index={0} />
            <HamburgerLine isOpen={isMenuOpen} index={1} />
            <HamburgerLine isOpen={isMenuOpen} index={2} />
          </HamburgerButton>
        </HeaderContent>
      </HeaderContainer>

      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;

