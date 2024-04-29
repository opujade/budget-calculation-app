import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Prices } from './pages/Prices';
import { Home } from './pages/Home';
import { TotalPriceProvider } from './context/TotalPriceProvider';

function App() {
  return (
    <>
      <TotalPriceProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prices" element={<Prices />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </TotalPriceProvider>
    </>
  );
}

export default App;
