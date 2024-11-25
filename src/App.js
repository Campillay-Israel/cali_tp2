import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ nombre: "", precio: "", categoria: "" });
  const [loading, setLoading] = useState(false);

  // Simular la carga inicial con timeout
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setProducts([
        { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
        { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
        { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
        { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
        { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Manejar el envío del formulario
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Agregar un producto simulado con retardo
    setLoading(true);
    const timeout = setTimeout(() => {
      setProducts((prevProducts) => [
        ...prevProducts,
        { id: prevProducts.length + 1, ...newProduct },
      ]);
      setLoading(false);
      setNewProduct({ nombre: "", precio: "", categoria: "" });
    }, 1000);

    return () => clearTimeout(timeout);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Gestión de Productos</h1>

      {/* Formulario para agregar productos */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.nombre}
          onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.precio}
          onChange={(e) => setNewProduct({ ...newProduct, precio: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Categoría"
          value={newProduct.categoria}
          onChange={(e) => setNewProduct({ ...newProduct, categoria: e.target.value })}
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>

      {/* Spinner mientras carga */}
      {loading ? (
        <div style={{ marginTop: "20px" }}>
          <span>Cargando...</span>
        </div>
      ) : (
        // Tabla de productos
        <table
          border="1"
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            textAlign: "center",
            width: "80%",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>${product.precio}</td>
                <td>{product.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
