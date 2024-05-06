import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { Pricing } from './Pricing';
import { NavBar } from '../../components/NavBar';
import { Budgets } from './Budgets';
import products from '../../data/products';
import { useState } from 'react';
import { PaymentOptions } from './PaymentOptions';
import { OnCourseBudgets } from './OnCourseBudgets';

export const Prices = () => {
  const [checked, setChecked] = useState(
    new Array(products.length).fill(false)
  );

  const checkMethods = {
    isChecked: (index) => checked[index],
    switchChecked: (index) => {
      const checkedAux = [...checked];
      checkedAux[index] = !checked[index];
      setChecked(checkedAux);
    },
    unCheckAll: () => setChecked(new Array(products.length).fill(false)),
  };

  return (
    <>
      <div className="w-3/4 mx-auto">
        <NavBar></NavBar>

        <Header />

        <PaymentOptions />

        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={product.id}
            index={index}
            checkMethods={checkMethods}
          />
        ))}

        <Pricing />

        <Budgets checkMethods={checkMethods} />

        <OnCourseBudgets />
      </div>
    </>
  );
};
