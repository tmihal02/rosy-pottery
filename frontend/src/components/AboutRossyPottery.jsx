import React from 'react';
import './AboutRossyPottery.css';

const AboutRossyPottery = () => {
  return (<>

    <section className="about-rossy">
      <img 
        src="/pottery-background.JPG"  // 👈 promijeni putanju prema tvojoj slici
        alt="RossyPottery radionica" 
        className="about-image"
      />
      
      <p>
        RossyPottery je mala radionica posvećena stvaranju unikatnih keramičkih komada
        izrađenih s ljubavlju i pažnjom. Svaki komad nosi priču, inspiriranu prirodom,
        tradicijom i modernim dizajnom.
    
        Naša misija je donijeti toplinu, eleganciju i funkcionalnost u vaš dom kroz ručno
        rađenu keramiku koja traje generacijama.      
     
        Posjetite nas i otkrijte kako obični predmeti mogu postati izvanredni.
      </p>
    </section>
    </> );
};

export default AboutRossyPottery;
