import React ,{useRef,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import products from '../data/products.json';
import proizvodi from '../data/proizvodi.json';

import ProductPreviewCard from '../components/ProductPreviewCard.jsx';

import ProductSlider from '../components/ProductSlider.jsx';
import WelcomeComponent from '../components/WelcomeComponent.jsx';
import FunFactsSection from '../components/FunFactsSection.jsx';
import GeneralFunFact from '../components/GeneralFunFact.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import About from '../components/AboutRossyPottery.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductList from '../components/ProductList.jsx';
export default function Home() {


  
  const titlesRef = useRef([]);

  useEffect(() => {
    function handleScroll() {
      titlesRef.current.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    // Run once on mount
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="home-page">
      <WelcomeComponent></WelcomeComponent>
      
      <section className="featured-products">
        <div className='podnaslov'>
      <h1 className='proizvodi'>Proizvodi </h1>
   <h1>i usluge</h1></div>
  <h3>Nudimo već gotove artikle kao i izradu po želji</h3>
  
  <ProductSlider products={products} />

  <Link to="/shop" className="view-all-link">Pogledaj sve proizvode →</Link>
</section>

<section className="featured-products-no-categories">

<ProductList products={proizvodi} />
</section>
<section className="funfacts-section">
       <FunFactsSection></FunFactsSection>
      </section>
      <section className="generalFunFact-section">
    <GeneralFunFact />
  </section>

  

     
      <section className="about section">
  <div className="content">
    <h1 className='about-title' ref={el => titlesRef.current[0] = el}>O RossyPottery</h1>
    <About />
  </div>
  <div className="image">
    <img src="/carton3.jpg"  alt="About RossyPottery" />
  </div>
</section>

<section className="newsletter section">
  <div className="content">
    <h2 className='about-title' ref={el => titlesRef.current[1] = el}>Prijava na <span>NEWSLETTER</span></h2>
    <NewsletterForm />
  </div>
  <div className="image">
    <img src="/carton2.jpg" style={{width:"60%" ,height:"auto"  }} alt="Newsletter" />
  </div>
</section>

<section className="contact-info section">
  <div className="content">
    <h2 className='about-title' ref={el => titlesRef.current[2] = el}>Kontakt informacije</h2>
    <ContactInfo />
  </div>
  <div className="image">
    <img src="/carton1.jpg" alt="Contact Info" />
  </div>
</section>


    </div>
  );
}