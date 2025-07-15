import styled from 'styled-components';

export const ChatBotContainer = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const Message = styled.div<{ user?: boolean }>`
  background: ${({ user }) => (user ? '#d1ffe7' : '#e0e0e0')};
  color: #333;
  padding: 10px 14px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OptionButton = styled.button`
  padding: 10px;
  border: none;
  background: #59c88f;
  color: white;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #45b07a;
  }
`;