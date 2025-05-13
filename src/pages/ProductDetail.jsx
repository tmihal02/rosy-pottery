import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/proizvodi.json';
import CartContext from '../components/CartContext.jsx';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);
  const { addToCart } = useContext(CartContext);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-page">
    <h1>{product.name}</h1>
    <img src={product.image} alt={product.name} />    
    {/* New about section */}
    {product.about && (
      <p className="product-detail-about">{product.about}</p>
    )}
  
    {product.available ? (
      <button onClick={() => addToCart(product)}>Dostupno</button>
    ) : (
      <button disabled>Nedostupno</button>
    )}
    <br />
    <Link to="/shop">← Nazad</Link>
  </div>
  
  );
}
