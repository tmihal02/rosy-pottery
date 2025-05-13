import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter.jsx';
import './Shop.css';

export default function Shop() {
  const location = useLocation();
  const initialCategory = location.state?.category || null;

  return (
    <div className="shop-page">
      <CategoryFilter initialCategory={initialCategory} />
    </div>
  );
}
