import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { Pricing } from './Pricing';
import { NavBar } from '../../components/NavBar';
import { Budgets } from './Budgets';
import products from '../../data/products';

export const Prices = () => {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <NavBar></NavBar>
        
        <Header />

        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}

        <Pricing />

        <Budgets />
      </div>
    </>
  );
};
