import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

export default function Carousel() {
  const [curSlide, setCurSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(document.querySelectorAll(`.${styles.slide}`));
  }, []);

  useEffect(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  }, [curSlide, slides]);

  const nextSlide = () => {
    setCurSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <img src="https://source.unsplash.com/random?landscape,mountain" alt="" />
      </div>
      <div className={styles.slide}>
        <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
      </div>
      <div className={styles.slide}>
        <img src="https://source.unsplash.com/random?landscape,night" alt="" />
      </div>
      <div className={styles.slide}>
        <img src="https://source.unsplash.com/random?landscape,city" alt="" />
      </div>
      <button className={styles.btnNext} onClick={nextSlide}>Next</button>
      <button className={styles.btnPrev} onClick={prevSlide}>Prev</button>
    </div>
  );
}
