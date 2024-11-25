import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import Spinner from './components/Spinner';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts([
        { nombre: 'Programación en JavaScript', precio: 35, categoria: 'Libros' },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <Spinner loading={loading} />
      {!loading && <ProductTable products={products} />}
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;