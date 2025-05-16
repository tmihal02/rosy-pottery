import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';

export default function AdminPage() {
  const [product, setProduct] = useState({
    name: '',
    categories: '',
    about: '',
    price: '',
    available: true,
    image: null,
  });

  const [productList, setProductList] = useState([]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`https://rosy-pottery-backend.onrender.com/api/products/${id}`);
      setProductList(productList.filter((p) => p.id !== id));
      alert('Product deleted successfully.');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  // Fetch existing products (for displaying and deleting)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://rosy-pottery-backend.onrender.com/api/products');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('categories', product.categories);
    formData.append('about', product.about);
    formData.append('price', product.price);
    formData.append('available', product.available);
    formData.append('image', product.image);

    try {
      const response = await axios.post('https://rosy-pottery-backend.onrender.com/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added successfully!');
      setProduct({
        name: '',
        categories: '',
        about: '',
        price: '',
        available: true,
        image: null,
      });
      setProductList([...productList, response.data]); // Update product list after adding
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product.');
    }
  };

  return (
    <div className="admin-page">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Categories (comma-separated)</label>
          <input type="text" name="categories" value={product.categories} onChange={handleChange} required />
        </div>
        <div>
          <label>About</label>
          <textarea name="about" value={product.about} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Available</label>
          <select
            name="available"
            value={product.available}
            onChange={(e) =>
              setProduct({
                ...product,
                available: e.target.value === 'true',
              })
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>Image</label>
          <input type="file" name="image" onChange={handleFileChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <div className="admin-product-list">
        {productList.map((product) => (
          <div key={product.id} className="admin-product-item">
            <img
              src={`https://rosy-pottery-backend.onrender.com${product.image}`}
              alt={product.name}
              className="admin-product-image"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <div className="admin-product-info">
              <h3>{product.name}</h3>
              <p>Kategorije: {Array.isArray(product.categories) ? product.categories.join(', ') : product.categories}</p>
              <p>{product.about}</p>
              <p>Cijena: ${product.price}</p>
              <p>Status: {product.available ? 'Dostupno' : 'Nedostupno'}</p>
              <button onClick={() => handleDelete(product.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
