import React from 'react';
import ProductCard from './ProductCard.jsx';
import './ProductList.css'; // opcionalno ako želiš grid/styling

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="product-list">Nema dostupnih proizvoda.</div>;
  }

  return (
   
     <div className="product-grid">
            {products.length > 0 ? (
              products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))
            ) : (
              <div className="product-list">Nema dostupnih proizvoda.</div>
            )}
          </div>
  );
}