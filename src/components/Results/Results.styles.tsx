import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Card } from '../../styles/GlobalStyles';

export const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 60px;

  /* Desktop: 3 colunas */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tablet: 2 colunas */
  @media (max-width: 1023px) and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 800px;
    margin: 0 auto 60px auto;
  }

  /* Mobile: 1 coluna */
  @media (max-width: 639px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const TestimonialCard = styled(Card)`
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  max-height: 320px;

  /* Ajuste para tablet - cards mais compactos */
  @media (max-width: 1023px) and (min-width: 640px) {
    min-height: 260px;
    max-height: 300px;
    padding: 20px;
  }

  /* Mobile - altura automática */
  @media (max-width: 639px) {
    min-height: auto;
    max-height: none;
  }
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 28px;
  opacity: 0.5;
  color: ${theme.colors.primary};

  @media (max-width: 639px) {
    font-size: 24px;
    right: 16px;
  }
`;

export const TestimonialText = styled.p`
  color: ${theme.colors.mediumGray};
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 15px;

  @media (max-width: 1023px) and (min-width: 640px) {
    font-size: 14px;
    line-height: 1.4;
  }

  @media (max-width: 639px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;

export const ClientAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: ${theme.colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;

  @media (max-width: 639px) {
    width: 52px;
    height: 52px;
    font-size: 16px;
  }
`;

export const ClientDetails = styled.div`
  min-width: 0;
`;

export const ClientName = styled.h4`
  color: ${theme.colors.darkGray};
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 1023px) and (min-width: 640px) {
    font-size: 14px;
  }

  @media (max-width: 639px) {
    font-size: 16px;
  }
`;

export const ClientResult = styled.p`
  color: ${theme.colors.primary};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 1023px) and (min-width: 640px) {
    font-size: 12px;
  }

  @media (max-width: 639px) {
    font-size: 14px;
  }
`;

export const TransformationsSection = styled.div`
  margin-top: 60px;
`;

export const TransformationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1023px) and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`;

export const TransformationCard = styled(Card)`
  text-align: center;
  padding: 24px;
`;

export const TransformationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 16px;
`;

export const TransformationTitle = styled.h4`
  color: ${theme.colors.darkGray};
  margin-bottom: 8px;
`;

export const TransformationResult = styled.p`
  color: ${theme.colors.primary};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const TransformationTime = styled.p`
  color: ${theme.colors.mediumGray};
  font-size: 14px;
`;