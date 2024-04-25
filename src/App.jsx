import { TotalPriceProvider } from './context/TotalPriceProvider';
import { Prices } from './pages/Prices';

function App() {
  return (
    <>
      <TotalPriceProvider>
        <Prices />
      </TotalPriceProvider>
    </>
  );
}

export default App;
