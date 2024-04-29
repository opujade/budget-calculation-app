import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="hero min-h-screen bg-header-pattern">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-gray-950">
          <h1 className="mb-5 text-5xl font-bold">Benvingut/uda!</h1>
          <p className="mb-5">
            En aquesta pàgina podràs calcular el pressupost total dels serveis d'informàtica que oferim. Fes clic al enllaç per començar amb el teu projecte!
          </p>
          <Link to={'/prices'} className="btn btn-outline btn-success">Començar</Link>
        </div>
      </div>
    </div>
  );
};
