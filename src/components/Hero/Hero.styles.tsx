import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.lightGray} 0%, ${theme.colors.white} 100%);
  padding: 120px 0 40px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 100px 0 40px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 80px 0 40px;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: 1440px) {
    gap: 40px;
    padding: 0 30px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 40px;
    padding: 0 40px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 40px;
    padding: 0 16px;
  }
`;

export const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  order: 2;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 24px;
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.mediumGray};
  margin-bottom: 32px;
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 300px;
    max-height: 300px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 350px;
    max-height: 350px;
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  z-index: 3;
  white-space: nowrap;

  &.card-1 {
    top: 10%;
    right: 40px;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      top: 15%;
      right: -15px;
      padding: 14px;
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      top: 4%;
      right: -10px;
      padding: 12px;
    }
  }

  &.card-2 {
    bottom: 10%;
    left: 40px;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      bottom: 15%;
      left: -15px;
      padding: 14px;
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      bottom: 4%;
      left: -10px;
      padding: 12px;
    }
  }
`;

export const CardTitle = styled.h4`
  color: ${theme.colors.primary};
  margin-bottom: 8px;
  font-size: 16px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    margin-bottom: 6px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

export const CardText = styled.p`
  color: ${theme.colors.mediumGray};
  font-size: 14px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const DecorativeElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${theme.colors.gradient};
  border-radius: 50%;
  opacity: 0.1;
  z-index: 0;

  &.element-1 {
    top: 10%;
    right: 10%;
  }

  &.element-2 {
    bottom: 10%;
    left: 10%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`;