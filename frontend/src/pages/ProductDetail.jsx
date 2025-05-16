import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CartContext from '../components/CartContext.jsx';
import './ProductDetail.css';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const product = products.find(p => String(p.id) === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-page">
      <h1>{product.name}</h1>
      <img src={`${import.meta.env.VITE_API_BASE_URL}${product.image}`} alt={product.name} />
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
