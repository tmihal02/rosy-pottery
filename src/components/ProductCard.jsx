import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext.jsx';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div className="product-card error">Product data is missing</div>;
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="image-wrapper">
        <img src={`https://your-backend.onrender.com${product.image}`} alt={product.name} />
          <h2>{product.name}</h2>
        </div>
      </Link>
      {product.available ? (
        <button onClick={() => addToCart(product)}>Dostupno</button>
      ) : (
        <button disabled>Nedostupno</button>
      )}
    </div>
  );
}
