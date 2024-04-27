import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { Footer } from './Footer';
import products from '../../data/products';

export const Prices = () => {
  return (
    <div className="w-3/4 mx-auto text-center text-gray-100 min-h-screen">
      <Header />

      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}

      <Footer />
    </div>
  );
};
