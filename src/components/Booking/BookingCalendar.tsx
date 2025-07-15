import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BookingWrapper, TimeSelector, ConfirmButton } from './bookingCalendar.style';
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBR);

interface BookingCalendarProps {
  onFinishBooking?: (data: { raw: Date; formattedTime: string }) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onFinishBooking }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleConfirm = () => {
    if (selectedDate && selectedTime && onFinishBooking) {
      // Combinar data e horário
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const finalDate = new Date(selectedDate);
      finalDate.setHours(hours, minutes, 0, 0);

      const formatted = format(finalDate, "HH:mm'h'", { locale: ptBR });
      onFinishBooking({ raw: finalDate, formattedTime: formatted });
      setSelectedDate(null);
      setSelectedTime('');
    }
  };

  // Função para gerar horários disponíveis
  const getAvailableTimes = (): string[] => {
    const times: string[] = [];
    for (let hour = 6; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const availableTimes = getAvailableTimes();

  return (
    <BookingWrapper>
      <h3>Agende sua aula</h3>

      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        placeholderText="Escolha uma data"
        popperPlacement="bottom-start"
        withPortal
        minDate={new Date()}
        calendarStartDay={1}
        className="custom-datepicker"
        showTimeSelect={false}
        fixedHeight
      />

      {selectedDate && (
        <TimeSelector>
          <h4>Selecione o horário:</h4>
          <div className="time-grid">
            {availableTimes.map((time) => (
              <div
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </TimeSelector>
      )}

      {selectedDate && selectedTime && (
        <ConfirmButton onClick={handleConfirm}>
          Confirmar para {format(selectedDate, 'dd/MM/yyyy', { locale: ptBR })} às {selectedTime}
        </ConfirmButton>
      )}
    </BookingWrapper>
  );
};

export default BookingCalendar;