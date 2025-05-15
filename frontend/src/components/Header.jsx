import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.currentTime = 0;  // rewind to start
            videoRef.current.play();           // play once
          }
        });
      },
      { threshold: 0.5 } // play when 50% of video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <video className="navbar__logo"
        ref={videoRef}
        src="/rossy-logo.mp4"
        muted
        playsInline
        preload="auto"
      />
      <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`navbar__links ${isOpen ? 'navbar__links--active' : ''}`}>
        <li onClick={() => setIsOpen(!isOpen)}><Link to="/">Početna</Link></li>
        <li onClick={() => setIsOpen(!isOpen)}><Link to="/shop">Ponuda</Link></li>
        <li onClick={() => setIsOpen(!isOpen)}><Link to="/about">O nama</Link></li>
        <li onClick={() => setIsOpen(!isOpen)}>
  <Link to="/login" className="admin-link">Korisnik</Link>
</li>

      </ul>
    </nav>
  );
}
