import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext.jsx';
import './ProductCard.css';

export default function ProductPreviewCard({ product: product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <Link to="/shop" state={{ category: product.name }}>
        <img src={`/images/${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
      
    </div>
  );
}