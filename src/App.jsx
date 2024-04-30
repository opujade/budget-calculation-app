import { Navigate, Route, Routes } from 'react-router-dom';
import { Prices } from './pages/Prices';
import { Home } from './pages/Home';
import { UsersProvider } from './context/UsersProvider';

function App() {
  return (
    <>
      <UsersProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prices" element={<Prices />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </UsersProvider>
    </>
  );
}

export default App;
