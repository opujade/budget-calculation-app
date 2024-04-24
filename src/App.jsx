import { useState, useContext } from 'react';

// TODO Exportar variable en otro archivo en la carpeta /data
const products = [
  {
    title: 'Seo',
    description: "Programació d'una web responsive completa",
    price: 300,
    id: 1,
  },
  {
    title: 'Ads',
    description: "Programació d'una web responsive completa",
    price: 400,
    id: 2,
  },
  {
    title: 'Web',
    description: "Programació d'una web responsive completa",
    price: 500,
    id: 3,
  },
];

function App() {
  // TODO Hacer variable que sea un context e importar
  const [totalPrice, setTotalPrice] = useState(0);
  // TODO Estado booleano para los checkboxes dentro de los componentes
  const [checked, setChecked] = useState(false);

  // TODO Handle checked function
  const handleCheckbox = (price) => {
    setChecked(!checked);
    if (!checked) {
      setTotalPrice(totalPrice + price);
    } else {
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <>
      {/* TODO Componente Header: */}
      <h1>Aconsegueix la millor qualitat</h1>
      {/* TODO 3 Checkboxes que añaden X cantidad al presupuesto. */}
      <div>
        <h3>{products[0].title}</h3>
        <p>{products[0].description}</p>
        <div>{products[0].price}</div>
        <input
          name={products[0].id}
          type="checkbox"
          onChange={() => handleCheckbox(products[0].price)}
        ></input>
        <label form={products[0].id}>Afegir</label>
      </div>
      {/* TODO Componente Footer: */}
      <div>
        <p>Preu pressupostat: <span>{totalPrice}</span></p>
      </div>
    </>
  );
}

export default App;
