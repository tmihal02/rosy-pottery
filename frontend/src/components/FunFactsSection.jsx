import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaBoxOpen, FaStar, FaLeaf, FaHeart } from 'react-icons/fa';
import './FunFactsSection.css';

const facts = [
  { number: 20, suffix: '+', description: 'Prodanih komada', icon: <FaBoxOpen /> },
  { number: 4.9, suffix: '/5', description: 'Prosječna ocjena', icon: <FaStar /> },
  { number: 3, suffix: ' godine', description: 'Strasti prema keramici', icon: <FaHeart /> },
  { number: 100, suffix: '%', description: 'Ekološka ambalaža', icon: <FaLeaf /> },
];

export default function FunFactsSection() {
  return (
    <section className="fun-facts">
      {facts.map((fact, index) => (
        <FactCard key={index} fact={fact} />
      ))}
    </section>
  );
}

function FactCard({ fact }) {
  const [inView, setInView] = useState(false);

  // Funkcija za provjeru kada element ulazi u viewport
  const checkVisibility = () => {
    const rect = document.getElementById(fact.description).getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    // Dodajemo event listener za scroll
    window.addEventListener('scroll', checkVisibility);

    // Pokreni provjeru odmah pri učitavanju stranice
    checkVisibility();

    // Cleanup na unmount
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []); // Prazan array znači da će se useEffect pokrenuti samo jednom, prilikom montiranja komponente

  return (
    <div
      id={fact.description}  // Koristimo ID za lakše praćenje
      className={`fact-card ${inView ? 'animate' : ''}`}
    >
      <div className="fact-icon">{fact.icon}</div>
      <div className="fact-number">
        <CountUp end={fact.number} duration={2} />{fact.suffix}
      </div>
      <div className="fact-description">{fact.description}</div>
    </div>
  );
}
