import React, { useEffect, useState } from 'react';
import './GeneralFunFact.css';

export default function GeneralFunFact() {
  const [inView, setInView] = useState(false);

  const checkVisibility = () => {
    const rect = document.getElementById('general-fun-fact').getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div id="general-fun-fact" className={`general-fun-fact ${inView ? 'animate' : ''}`}>
      <h2>Jeste li znali?</h2>
      <p>
      Istraživanja su pokazala da ručno rađena keramika i posuđe mogu <strong>povećati osjećaj zadovoljstva </strong>pri jelu i ispijanju pića! Ljudi često ocjenjuju hranu ukusnijom kada se servira u lijepoj, unikatnoj keramici, jer to potiče osjetilni užitak i stvara osjećaj “posebnog trenutka” u svakodnevici.

Dakle, tvoja šalica za kavu ili zdjelica za juhu napravljena rukom nekog lončara ne samo da je praktična, nego stvarno može podići raspoloženje u domu!  </p>
    </div>
  );
}
