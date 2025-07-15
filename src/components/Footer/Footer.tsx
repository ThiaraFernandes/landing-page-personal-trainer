import React from 'react';
import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterLink, FooterText, Logo, SocialLinks, SocialLink, FooterBottom } from './Footer.style';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* COLUNA 1: Logo + Redes */}
        <FooterSection>
          <Logo>
            <img src="/assets/images/logo.png" alt="personal logo" />
          </Logo>
          <FooterText>
            Mais que um treino: um estilo de vida saudável e possível.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#"><FaFacebookF /></SocialLink>
            <SocialLink href="#"><FaInstagram /></SocialLink>
            <SocialLink href="#"><FaWhatsapp /></SocialLink>
          </SocialLinks>
        </FooterSection>

        {/* COLUNA 2: Navegação */}
        <FooterSection>
          <FooterTitle>Navegação</FooterTitle>
          <FooterLink onClick={() => onNavigate('hero')}>Início</FooterLink>
          <FooterLink onClick={() => onNavigate('about')}>Sobre Mim</FooterLink>
          <FooterLink onClick={() => onNavigate('services')}>Serviços</FooterLink>
          <FooterLink onClick={() => onNavigate('results')}>Resultados</FooterLink>
          <FooterLink onClick={() => onNavigate('contact')}>Contato</FooterLink>
        </FooterSection>

        {/* COLUNA 3: Serviços */}
        <FooterSection>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink href="#">Treino Personalizado</FooterLink>
          <FooterLink href="#">Treino em Dupla</FooterLink>
          <FooterLink href="#">Consultoria Online</FooterLink>
          <FooterLink href="#">Avaliação Física</FooterLink>
        </FooterSection>

        {/* COLUNA 4: Contato */}
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>
            📱 <a href="https://wa.me/5522998280353" target="_blank" rel="noopener noreferrer">
              Fale pelo WhatsApp
            </a>
          </FooterText>
          <FooterText>📧 <a href="mailto:hellisgyovana@gmail.com">
              Enviar e-mail
            </a>
          </FooterText>
          <FooterText>📍 Italva - RJ</FooterText>
          <FooterText>🕒 Seg-Sex: 6h às 18h</FooterText>
          <FooterText>🕒 Sáb: 8h às 12h</FooterText>
        </FooterSection>
      </FooterContent>



      <FooterBottom>
        <p>&copy; 2024 FitLife - Héllis Rocha Personal Trainer. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💚 para quem busca mais qualidade de vida.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

