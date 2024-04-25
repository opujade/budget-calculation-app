import { ProductCard } from './ProductCard';
import products from '../../data/products';
import { useTotalPriceContext } from '../../context/TotalPriceProvider';

export const Prices = () => {
  // TODO Hacer variable que sea un context e importar
  const totalPrice = useTotalPriceContext();

  return (
    <div className="w-3/4 mx-auto text-center min-h-screen">
      {/* TODO Componente Header: */}
      <div className='hero '>
        <h1 className="">Aconsegueix la millor qualitat</h1>
      </div>

      {/* Products Section */}
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}

      {/* TODO Componente Footer: */}
      <div>
        <p>
          Preu pressupostat: <span>{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};
