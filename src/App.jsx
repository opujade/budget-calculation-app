import { TotalPriceProvider } from './context/TotalPriceProvider';
import { Prices } from './pages/Prices';

function App() {
  return (
    <div className='bg-slate-900'>
      <TotalPriceProvider>
        <Prices />
      </TotalPriceProvider>
    </div>
  );
}

export default App;
