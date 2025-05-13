  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Header from './components/Header.jsx';
  import Footer from './components/Footer.jsx';

  import About from './pages/About.jsx';  // <-- Add this line
import LoginPage from './pages/LoginPage.jsx';
  import Home from './pages/Home.jsx';
  import Shop from './pages/Shop.jsx';
  import ProductDetail from './pages/ProductDetail.jsx';
  import AdminPage from './pages/AdminPage';

  import "./App.css"
  export default function App() {
    return (
      <div className="App">
        

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />  {/* <-- Add this line */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }