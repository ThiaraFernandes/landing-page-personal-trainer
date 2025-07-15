import {useState, useEffect} from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGoogle, FaMapMarkerAlt } from "react-icons/fa";
import { theme } from '../../styles/theme';
import {
  ContactContainer,
  ContactForm,
  ContactIcon,
  ContactTitle,
  ContactText,
  ContactLink,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  ContactInfo,
  ContactCard,
  SocialLinks,
  SocialLink,
  BadgeSection,
  BadgeImage,
  BadgeText
} from './Contact.style';

import { Section, SectionTitle, Button } from '../../styles/GlobalStyles';

interface ContactProps {
  selectedDate?: Date | null;
}

const Contact: React.FC<ContactProps> = ({ selectedDate }) => {
  const [dateMessage, setDateMessage] = useState('');

  useEffect(() => {
    if (selectedDate) {
      setDateMessage(`Gostaria de agendar para: ${selectedDate.toLocaleString('pt-BR')}`);
    }
  }, [selectedDate]);

  return (
    <Section id="contact" style={{ background: theme.colors.lightGray }}>
      <div className="container">
        <SectionTitle>Entre em Contato</SectionTitle>

        <ContactContainer>
          {/* COLUNA ESQUERDA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <ContactForm>
              <FormTitle>Agende sua aula</FormTitle>

              <form
                action="https://formsubmit.co/hellisgyovana@gmail.com"
                method="POST"
              >
                {/* Campos ocultos opcionais */}
                <input type="hidden" name="_subject" value="Novo contato via site" />
                <input type="hidden" name="_next" value="http://localhost:5173/obrigado" />
                <input type="hidden" name="_captcha" value="false" />

                <FormGroup>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(22) 99999-9999"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Mensagem</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={dateMessage}
                    onChange={(e) => setDateMessage(e.target.value)}
                    placeholder="Conte-me sobre seus objetivos e como posso te ajudar..."
                    required
                  />
                </FormGroup>

                <Button type="submit" variant="primary" style={{ width: '100%' }}>
                  Enviar Mensagem
                </Button>
              </form>
            </ContactForm>

            <BadgeSection>
              <BadgeImage
                src="https://img.icons8.com/emoji/96/green-heart.png"
                alt="Atendimento Humanizado"
              />
              <BadgeText>
                Atendimento com empatia, ética e foco no seu bem-estar.
              </BadgeText>
            </BadgeSection>
          </div>

          {/* COLUNA DIREITA */}
          <ContactInfo>
            <ContactCard>
              <ContactIcon>
                <FaWhatsapp />
              </ContactIcon>
              <ContactTitle>WhatsApp</ContactTitle>
              <ContactText>Resposta rápida e atendimento personalizado</ContactText>
              <Button
                as="a"
                href="https://wa.me/5522998280353"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                style={{ padding: '8px 16px', fontSize: '14px' }}
              >
                Falar agora no WhatsApp
              </Button>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <FaGoogle />
              </ContactIcon>
              <ContactTitle>E-mail</ContactTitle>
              <ContactText>Para dúvidas e informações detalhadas</ContactText>
              <ContactLink href="mailto:hellisgyovana@gmail.com">
                <Button
                  as="a"
                  href="mailto:hellisgyovana@gmail.com"
                  target="_blank"
                  variant="secondary"
                  style={{ padding: '6px 12px', fontSize: '14px', marginTop: '8px' }}
                >
                  Entrar em contato por e-mail
                </Button>
              </ContactLink>

              <SocialLinks>
                <SocialLink
                  href="https://www.instagram.com/hellisgyovana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialLink>
                <SocialLink
                  href="https://www.facebook.com/share/14DXXerXAcP/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </SocialLink>
              </SocialLinks>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactTitle>Localização</ContactTitle>

              <div style={{ marginTop: '10px' }}>
                <iframe
                  title="Mapa de Italva"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.447328374053!2d-41.700000!3d-21.419444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95dd08d30a0a0a0f%3A0xabc1234567890!2sItalva%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v00000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ContactCard>
          </ContactInfo>
        </ContactContainer>
      </div>
    </Section>
  );
};

export default Contact;
