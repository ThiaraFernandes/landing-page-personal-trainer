
import { Container, Card, Icon, Title, Message, Button } from './Tanks.style';

const Obrigado: React.FC = () => {
  return (
    <Container>
      <Card>
        <Icon />
        <Title>Mensagem Enviada com Sucesso!</Title>
        <Message>
          Obrigado por entrar em contato. Em breve responderei sua mensagem.
        </Message>
        <Button href="/">Voltar para o Início</Button>
      </Card>
    </Container>
  );
};

export default Obrigado;