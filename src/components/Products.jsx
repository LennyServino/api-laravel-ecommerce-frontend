import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/v1/admin/products") 
      .then((response) => {
        setProducts(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;