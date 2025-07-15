import { useState } from 'react';
import { DatePickerStyle, GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Results from './components/Results/Results';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import BookingCalendar from './components/Booking/BookingCalendar';
import { FloatButtonsContainer, FloatButton, ModalOverlay } from './styles/FloatingUI.style';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyles />
      <DatePickerStyle />
      <div className="container">
        <Header onNavigate={handleNavigate} />
        <Hero onNavigate={handleNavigate} />
        <About />
        <Services />
        <Results />
        <Contact selectedDate={selectedDate} />
        <Footer onNavigate={handleNavigate} />
      </div>

      {showChat && (
        <ModalOverlay onClick={() => setShowChat(false)}>
          <div onClick={e => e.stopPropagation()}>
            <ChatBot onRequestSchedule={() => {
              setShowChat(false); // Fecha o chat
              handleNavigate('contact');
            }} />
          </div>
        </ModalOverlay>
      )}

      {showCalendar && (
        <ModalOverlay onClick={() => setShowCalendar(false)}>
          <div onClick={e => e.stopPropagation()}>
            <BookingCalendar onFinishBooking={({ raw}) => {
              setShowCalendar(false);
              setSelectedDate(raw);
              handleNavigate('contact');
            }} />
          </div>
        </ModalOverlay>
      )}


      {/* Botões flutuantes */}
      <FloatButtonsContainer>
        <FloatButton onClick={() => setShowChat(true)}>🤖</FloatButton>
        <FloatButton onClick={() => setShowCalendar(true)}>🗓️</FloatButton>
      </FloatButtonsContainer>

    </>
  );
}

export default App;
