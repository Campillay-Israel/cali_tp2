import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <table border="1" style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
