import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.jsx';
import "./CategoryFilter.css"
export default function CategoryFilter({ initialCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [proizvodi, setProizvodi] = useState([]);
  const [categories, setProducts] = useState([]);

  // Fetch proizvodi.json
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/proizvodi`)
      .then(res => setProizvodi(res.data))
      .catch(err => console.error("Error loading proizvodi:", err));
  }, []);

  // Fetch products.json
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products-file`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error loading products:", err));
  }, []);


  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProizvodi = selectedCategory
    ? proizvodi.filter(p => p.categories.includes(selectedCategory))
    : proizvodi;

  return (
    <div className="category-filter">
      <h2 className='category-title'>Odaberi kategoriju</h2>
      <div className="category-buttons">
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? 'active' : ''}
        >
          Sve
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={selectedCategory === cat.name ? 'active' : ''}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProizvodi.length > 0 ? (
          filteredProizvodi.map(p => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p className="no-products">No products found for this category.</p>
        )}
      </div>
    </div>
  );
}
