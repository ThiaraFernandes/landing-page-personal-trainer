import React from 'react';
import { AboutContainer, AboutContent, AboutImage, AboutText, CertificationIcon, CertificationItem, CertificationsList, CertificationText, CertificationTitle, StatItem, StatLabel, StatNumber, StatsContainer } from './About.styles';
import { Section, SectionTitle } from '../../styles/GlobalStyles';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>Sobre Mim</SectionTitle>

        <AboutContainer>
          <AboutContent>
            <AboutText>
              Olá! Sou Héllis Rocha, personal trainer certificada, especializada em treinos personalizados para mulheres e idosos.
              Tenho como missão ajudar cada pessoa a descobrir sua força e alcançar uma vida mais saudável, ativa e confiante, independentemente da idade.
            </AboutText>

            <AboutText>
              Acredito que tanto mulheres quanto idosos merecem atenção individualizada, com treinos que respeitem suas necessidades, limitações e objetivos.
              Minha abordagem une exercícios funcionais, musculação e bem-estar emocional, proporcionando resultados reais e duradouros.
            </AboutText>

            <AboutText>
              Com empatia, segurança e motivação, ajudo especialmente o público idoso a melhorar mobilidade, equilíbrio e qualidade de vida.
            </AboutText>

            <CertificationsList>
              <CertificationTitle>Certificações & Especializações</CertificationTitle>

              <CertificationItem>
                <CertificationIcon />
                <CertificationText>Personal Trainer Certificado - CREF</CertificationText>
              </CertificationItem>

              <CertificationItem>
                <CertificationIcon />
                <CertificationText>Licenciatura e bacharelado em educação física</CertificationText>
              </CertificationItem>

              <CertificationItem>
                <CertificationIcon />
                <CertificationText>Especialização em Treinamento para IDOSOS</CertificationText>
              </CertificationItem>

            </CertificationsList>
          </AboutContent>

          <AboutImage
            src="/assets/images/personal-trainer-helping.jpg"
            alt="Marina Silva, personal trainer, ajudando cliente"
          />
        </AboutContainer>

        <StatsContainer>
          <StatItem>
            <StatNumber>10+</StatNumber>
            <StatLabel>Clientes Transformadas</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>3</StatNumber>
            <StatLabel>Anos de Experiência</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Taxa de Satisfação</StatLabel>
          </StatItem>
        </StatsContainer>
      </div>
    </Section>
  );
};

export default About;

