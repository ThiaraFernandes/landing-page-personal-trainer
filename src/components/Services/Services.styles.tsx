import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Card } from '../../styles/GlobalStyles';


export const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 95%;
 
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ServiceCard = styled(Card)`
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 18px; 

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.gradient};
  border-radius: 50%;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${theme.colors.white};
`;

export const ServiceTitle = styled.h3`
  color: ${theme.colors.darkGray};
  margin-bottom: 16px;
`;

export const ServiceDescription = styled.p`
  color: ${theme.colors.mediumGray};
  margin-bottom: 24px;
  line-height: 1.6;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 24px;
  text-align: left;
`;

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: ${theme.colors.mediumGray};
  font-size: 14px;

  &::before {
    content: '✓';
    color: ${theme.colors.success};
    font-weight: bold;
    margin-right: 8px;
  }
`;

// export const ServicePrice = styled.div`
//   font-size: 24px;
//   font-weight: 700;
//   color: ${theme.colors.primary};
//   margin-bottom: 16px;
// `;

// export const PriceLabel = styled.span`
//   font-size: 14px;
//   color: ${theme.colors.mediumGray};
//   font-weight: normal;
// `;

// export const PopularBadge = styled.div`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   background: ${theme.colors.success};
//   color: ${theme.colors.white};
//   padding: 4px 12px;
//   border-radius: ${theme.borderRadius.small};
//   font-size: 12px;
//   font-weight: 600;
// `;