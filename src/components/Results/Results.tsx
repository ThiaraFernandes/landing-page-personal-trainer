import React from 'react';
import { TestimonialCard, TransformationCard, TestimonialText, ResultsContainer, TestimonialsGrid, TransformationsGrid, QuoteIcon,ClientResult, ClientInfo, TransformationsSection, ClientAvatar, TransformationImage, TransformationTitle,  ClientDetails, TransformationResult, ClientName, TransformationTime } from './Results.styles';
import { Section, SectionTitle } from '../../styles/GlobalStyles';



const Results: React.FC = () => {
  const testimonials = [
    {
      text: "Depois que comecei a treinar com acompanhamento profissional, me sinto muito mais forte e disposta para encarar as tarefas do dia a dia. As dores na coluna, que eram constantes quando treinava sozinha, desapareceram.",
      name: "Dona Vera Pessanha",
      result: "Ganhou mais força e disposição para o dia a dia",
      avatar: "VP"
    },
    {
      text: "A musculação está mudando minha qualidade de vida! Desde que comecei, minha pressão arterial se mantém controlada. O treino personalizado da Héllis é maravilhosa, ela adapta tudo às minhas necessidades. Me sinto mais ativa, com mais força e disposição a cada dia.",
      name: "Dona Ivanete Gaudard",
      result: "Pressão controlada e mais disposição",
      avatar: "IG"
    },
    {
      text: "Há 6 meses, iniciei uma nova fase na minha vida. Mesmo com pouco tempo disponível, já percebo mudanças incríveis, no corpo e na mente. Acompanhada de perto pela Héllis, redescobri como a atividade física faz bem pra alma!",
      name: "Sabrina Freitas",
      result: "Transformação física e emocional",
      avatar: "SF"
    }

  ];

  const transformations = [
    {
      image: "/assets/images/idosa.png",
      title: "Qualidade de Vida",
      result: "Melhora na mobilidade",
      time: "em 4 meses"
    },
    {
      image: "/assets/images/mulleres-academia.png",
      title: "Autoconfiança Renovada",
      result: "Mais disposição no dia a dia",
      time: "em 3 meses"
    },
    {
      image: "/assets/images/treino-idosas.png",
      title: "Força e Equilíbrio",
      result: "Redução de dores e quedas",
      time: "em 6 meses"
    }
  ];

  return (
    <Section id="results">
      <ResultsContainer>
        <SectionTitle>Resultados Reais</SectionTitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuoteIcon>"</QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <ClientInfo>
                <ClientAvatar>{testimonial.avatar}</ClientAvatar>
                <ClientDetails>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientResult>{testimonial.result}</ClientResult>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        <TransformationsSection>
          <SectionTitle>Transformações</SectionTitle>
          <TransformationsGrid>
            {transformations.map((transformation, index) => (
              <TransformationCard key={index}>
                <TransformationImage 
                  src={transformation.image} 
                  alt={`Treinamento de ${transformation.title.toLowerCase()} com mulheres`}
                />
                <TransformationTitle>{transformation.title}</TransformationTitle>
                <TransformationResult>{transformation.result}</TransformationResult>
                <TransformationTime>{transformation.time}</TransformationTime>
              </TransformationCard>
            ))}
          </TransformationsGrid>
        </TransformationsSection>
      </ResultsContainer>
    </Section>
  );
};

export default Results;

