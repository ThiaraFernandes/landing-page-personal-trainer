import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 16px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 300px;
    order: -1;
  }
`;

export const AboutContent = styled.div`
  padding: 20px 0;
`;

export const AboutText = styled.p`
  margin-bottom: 24px;
  color: ${theme.colors.mediumGray};
  line-height: 1.7;
  font-size: 17px;
`;

export const CertificationsList = styled.div`
  margin-top: 32px;
`;

export const CertificationTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: 16px;
  font-size: 20px;
`;

export const CertificationItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  background: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.small};
`;

export const CertificationIcon = styled.div`
  width: 8px;
  height: 8px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  margin-right: 12px;
`;

export const CertificationText = styled.span`
  color: ${theme.colors.darkGray};
  font-weight: 500;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.light};
`;

export const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  color: ${theme.colors.mediumGray};
  font-size: 14px;
`;
