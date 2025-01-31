import { useEffect, useState } from 'react';
import { getPublicProducts } from '../lib/apiEcommerce';
import { MotionDiv } from './content/MotionDiv';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublicProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <MotionDiv>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export default Products;
