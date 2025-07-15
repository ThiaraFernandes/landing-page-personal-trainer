import styled from 'styled-components';

export const BookingWrapper = styled.div`
  background: #fff;
  max-width: 450px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  text-align: center;
  overflow: hidden;

  h3 {
    color: #333;
    font-size: 24px;
    margin-bottom: 16px;
  }

  .react-datepicker__input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  input {
    text-align: center;
    padding: 12px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    border: 2px solid #e0e0e0;
    transition: all 0.3s ease;
    background: #f8f9fa;
    
    &:focus {
      outline: none;
      border-color: #4caf50;
      background: white;
    }
  }

  /* Estilos específicos para o calendário */
  .react-datepicker {
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100% !important;
    max-width: 350px !important;
    margin: 0 auto;
    display: block;
  }

  .react-datepicker__header {
    background: linear-gradient(135deg, #4caf50, #45a049);
    color: white;
    border-bottom: none;
    padding: 16px;
    position: relative;
    border-radius: 12px 12px 0 0;
    width: 100%;
    box-sizing: border-box;
  }

  .react-datepicker__current-month {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin: 0;
    text-align: center;
    line-height: 1.4;
  }

  /* Setas de navegação corrigidas */
  .react-datepicker__navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 10;
  }

  .react-datepicker__navigation:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  .react-datepicker__navigation--previous {
    left: 16px;
  }

  .react-datepicker__navigation--next {
    right: 16px;
  }

  /* Ícones das setas */
  .react-datepicker__navigation-icon {
    position: relative;
    width: 0;
    height: 0;
  }

  .react-datepicker__navigation-icon::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%);
  }

  .react-datepicker__navigation--previous .react-datepicker__navigation-icon::before {
    transform: translate(-30%, -50%) rotate(135deg);
  }

  .react-datepicker__navigation--next .react-datepicker__navigation-icon::before {
    transform: translate(-70%, -50%) rotate(-45deg);
  }

  /* Dias da semana */
  .react-datepicker__day-names {
    background: #f8f9fa;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
  }

  .react-datepicker__day-name {
    color: #666;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    flex: 1;
    text-align: center;
    min-width: 0;
  }

  /* Corpo do calendário */
  .react-datepicker__month {
    padding: 16px;
    background: white;
    width: 100%;
    box-sizing: border-box;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
    margin-bottom: 4px;
    width: 100%;
  }

  .react-datepicker__day {
    color: #333;
    font-weight: 500;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 0.9rem;
    flex: 1;
    max-width: 40px;
    margin: 0 2px;
  }

  .react-datepicker__day:hover {
    background: #e8f5e8;
    color: #4caf50;
    transform: scale(1.05);
  }

  .react-datepicker__day--selected {
    background: #4caf50;
    color: white;
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
  }

  .react-datepicker__day--today {
    background: #e3f2fd;
    color: #2196f3;
    font-weight: 600;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  .react-datepicker__day--outside-month {
    color: #ccc;
  }

  /* Remover seletor de tempo original */
  .react-datepicker__time-container {
    display: none;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    max-width: 95vw;
    padding: 16px;
    margin: 0 10px;

    h3 {
      font-size: 20px;
    }

    input {
      font-size: 14px;
      max-width: 100%;
    }

    .react-datepicker {
      max-width: 100% !important;
    }

    .react-datepicker__header {
      padding: 12px;
    }

    .react-datepicker__current-month {
      font-size: 1.1rem;
    }

    .react-datepicker__navigation {
      width: 26px;
      height: 26px;
    }

    .react-datepicker__navigation--previous {
      left: 12px;
    }

    .react-datepicker__navigation--next {
      right: 12px;
    }

    .react-datepicker__day-name {
      font-size: 0.75rem;
    }

    .react-datepicker__day {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 0.85rem;
      max-width: 35px;
    }

    .react-datepicker__month {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    max-width: calc(100vw - 20px);

    .react-datepicker__day-name {
      font-size: 0.7rem;
    }

    .react-datepicker__day {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 0.8rem;
      max-width: 30px;
    }

    .react-datepicker__navigation {
      width: 24px;
      height: 24px;
    }

    .react-datepicker__navigation--previous {
      left: 8px;
    }

    .react-datepicker__navigation--next {
      right: 8px;
    }
  }
`;

export const TimeSelector = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;

  h4 {
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .time-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
    max-height: 200px;
    overflow-y: auto;
    padding: 4px;
    
    /* Scrollbar customizada */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #4caf50;
      border-radius: 3px;
    }
  }

  .time-slot {
    padding: 8px 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    text-align: center;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: #4caf50;
      background: #e8f5e8;
      transform: translateY(-2px);
    }

    &.selected {
      background: #4caf50;
      color: white;
      border-color: #4caf50;
      box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
    }
  }

  @media (max-width: 768px) {
    .time-grid {
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      gap: 6px;
    }

    .time-slot {
      font-size: 0.8rem;
      padding: 6px 8px;
      min-height: 36px;
    }
  }

  @media (max-width: 480px) {
    .time-grid {
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      gap: 4px;
    }

    .time-slot {
      font-size: 0.75rem;
      padding: 5px 6px;
      min-height: 32px;
    }
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    font-size: 14px;
  }
`;