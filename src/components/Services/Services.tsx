import React from 'react';
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServiceFeatures, ServiceFeature } from './Services.styles';
import { Section, SectionTitle} from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';


const Services: React.FC = () => {
  const services = [
    {
      icon: '💪',
      title: 'Treino Personalizado',
      description: 'Treino individual focado nos seus objetivos específicos com acompanhamento completo.',
      features: [
        'Avaliação física completa',
        'Plano de treino personalizado',
        'Suporte via WhatsApp'
      ],
    },
    {
      icon: '👥',
      title: 'Treino em Dupla',
      description: 'Treine com uma amiga e dividam os custos mantendo a qualidade do atendimento.',
      features: [
        'Treino para 2 pessoas',
        'Exercícios adaptados para ambas',
        'Motivação em grupo',
        'Desconto especial'
      ],
    },
    {
      icon: '📱',
      title: 'Consultoria Online',
      description: 'Acompanhamento à distância com planos de treino e orientações personalizadas.',
      features: [
        'Plano de treino mensal',
        'Vídeos explicativos',
        'Suporte diário via app'
      ],
    }
  ];

  return (
    <Section id="services" style={{ background: theme.colors.lightGray }}>
      <ServicesContainer>
        <SectionTitle>Meus Serviços</SectionTitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              {/* {service.popular && <PopularBadge>Mais Popular</PopularBadge>} */}
              
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>

            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </Section>
  );
};

export default Services;

