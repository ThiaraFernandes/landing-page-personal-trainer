
import { Routes, Route } from 'react-router-dom';
import Obrigado from '../components/Tanks/Tanks'; 
import App from '../App';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/obrigado" element={<Obrigado />} />
    </Routes>
  );
};

export default AppRoutes;
