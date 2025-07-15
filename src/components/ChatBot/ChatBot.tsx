import { useState } from 'react';
import { ChatBotContainer, Message, Options, OptionButton } from './ChatBot.style';

interface ChatBotProps {
  onRequestSchedule: () => void;
}
const ChatBot: React.FC<ChatBotProps> = ({ onRequestSchedule }) => {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  const handleOption = (response: string, nextStep: number) => {
    setMessages(prev => [...prev, response]);
    setStep(nextStep);
  };

  return (
    <ChatBotContainer>
      <Message>Olá! Como posso te ajudar hoje?</Message>

      {step === 0 && (
        <Options>
          <OptionButton onClick={() => handleOption('Quero emagrecer', 1)}>
            Quero  emagrecer
          </OptionButton>
          <OptionButton onClick={() => handleOption('Melhorar disposição', 2)}>
            Melhorar disposição
          </OptionButton>
          <OptionButton onClick={() => handleOption('Ganhar força muscular', 3)}>
            Ganhar força muscular
          </OptionButton>
        </Options>
      )}

      {messages.map((msg, index) => (
        <Message user key={index}>{msg}</Message>
      ))}

      {step === 1 && <Message>Ótimo! Posso te ajudar com treinos personalizados para perda de peso.</Message>}
      {step === 2 && <Message>Perfeito! Vamos trabalhar exercícios que aumentam sua energia diária.</Message>}
      {step === 3 && <Message>Maravilha! Treinos de força são ideais para isso. 💪</Message>}

      {step > 0 && (
        <Options>
          <OptionButton onClick={onRequestSchedule}>Agendar um Treino</OptionButton>
        </Options>
      )}
    </ChatBotContainer>
  );
};

export default ChatBot;