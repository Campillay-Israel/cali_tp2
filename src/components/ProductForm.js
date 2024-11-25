import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [formState, setFormState] = useState({
    nombre: '',
    precio: '',
    categoria: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.nombre && formState.precio && formState.categoria) {
      onAddProduct(formState);
      setFormState({ nombre: '', precio: '', categoria: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', textAlign: 'center' }}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formState.nombre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formState.precio}
        onChange={handleChange}
      />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formState.categoria}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductForm;
