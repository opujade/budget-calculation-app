import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavBar } from '../../components/NavBar';
import products from '../../data/products';

export const Prices = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="w-3/4 mx-auto">
        <Header />

        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}

        <Footer />
      </div>
    </>
  );
};
