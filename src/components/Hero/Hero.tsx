import React from 'react';
import { HeroSection, HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroButtons, HeroImageContainer, HeroImage, DecorativeElement, FloatingCard, CardTitle, CardText } from './Hero.styles';
import { Button } from '../../styles/GlobalStyles';


interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <HeroSection id="hero">
      <DecorativeElement className="element-1" />
      <DecorativeElement className="element-2" />

      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Sua transformação começa com um novo estilo de vida
          </HeroTitle>
          <HeroSubtitle>
            Sou Héllis Rocha, personal trainer especializada em treinos personalizados para mulheres e idosos.
            Ajudo mulheres a conquistarem o corpo que desejam e auxilio idosos a melhorarem sua saúde, disposição e qualidade de vida com segurança, motivação e resultados reais.
          </HeroSubtitle>
          <HeroButtons>
            <Button variant="primary" onClick={() => onNavigate('contact')}>
              Começar Agora
            </Button>
            <Button variant="outline" onClick={() => onNavigate('about')}>
              Conhecer Mais
            </Button>
          </HeroButtons>
        </HeroContent>

        <HeroImageContainer>
          <HeroImage
            src="/assets/images/personal.png"
            alt="Personal trainer feminina treinando com cliente"
          />

          <FloatingCard className="card-1">
            <CardTitle>+10 Clientes</CardTitle>
            <CardText>Transformadas com sucesso</CardText>
          </FloatingCard>

          <FloatingCard className="card-2">
            <CardTitle>3 Anos</CardTitle>
            <CardText>De experiência no mercado</CardText>
          </FloatingCard>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

