import { ProductCard } from './ProductCard';
import { Header } from './Header';
import { TotalPrice } from './TotalPrice';
import { NavBar } from '../../components/NavBar';
import { RequestBudget } from './RequestBudget';
import products from '../../data/products';
import { useState } from 'react';
import { TogglePayment } from './TogglePayment';
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
      <div className="w-3/4 mx-auto relative">
        <NavBar></NavBar>

        <Header />

        <TogglePayment />

        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={product.id}
            index={index}
            checkMethods={checkMethods}
          />
        ))}

        <TotalPrice />

        <RequestBudget checkMethods={checkMethods} />

        <OnCourseBudgets />
      </div>
    </>
  );
};
