import React,{useState,useEffect,useRef} from "react";
import "./WelcomeComponent.css"
import { Link } from 'react-router-dom';

export default function WelcomeComponent(){

    const imageRef = useRef(null);

    const imageContainerRef = useRef(null);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            imageRef.current.classList.add('animate');
          } else {
            imageRef.current.classList.remove('animate');
          }
        },
        { threshold: 0.82 }
      );
    
      if (imageContainerRef.current) observer.observe(imageContainerRef.current);
    
      return () => {
        if (imageContainerRef.current) observer.unobserve(imageContainerRef.current);
      };
    }, []);

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        heroSection.style.backgroundPositionY = `${scrolled * -0.2}px`;
      });
    return (

    <section className="hero-section">
        
        <div className="hero-container">
          <h1 className='otkrijte'>Otkrijte</h1>
            <h1>jedinstvene komade keramike izrađene s ljubavlju.
            </h1>
            <div className='p'>
            <p>Uživajte u istraživanju jedinstvenih kreacija </p>
           <p className='keramike'>keramike.</p>
           </div>
           <Link to="/shop">
              <button className="cta-button">Ponuda</button>
            </Link>
        </div>
        <div className='image-and-content'>

        
        <div className="image-crop-container" ref={imageContainerRef}>
          <img
              ref={imageRef}
              className="roza-iza-zida"
              src="/roza-iza-zida.png"
              alt=""
          />
        </div>
      </div>
      </section>
);}