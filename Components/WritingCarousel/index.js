import React, { useState, useEffect } from 'react';
import styles from './WritingCarousel.module.css';
import ArrowLeft from '../Shapes/Arrows/ArrowLeft';
import ArrowRight from '../Shapes/Arrows/ArrowRight';
import Link from 'next/link';

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
        <img className={styles.image} src="https://image.hurimg.com/i/hurriyet/75/0x0/59c7165145d2a027e83a35dd.jpg" alt="" />
        <div className={styles.captionContainer}>
          <h1 className={styles.caption}>HEHEHE</h1>
        </div>
      </div>
      <div className={styles.slide}>
        <Link href={'/Courses'}>
          <img className={styles.image} src="https://cdn.mos.cms.futurecdn.net/TKLDtTBhLsBKwcUxTySmK5.jpg" alt="" />
          <div className={styles.captionContainer}>
            <h1 className={styles.caption}>HEHEHE</h1>
          </div>
        </Link>
      </div>
      <div className={styles.slide}>
        <img className={styles.image} src="https://static.hiphopdx.com/2018/06/YT-Durk-e1529690906411-749x561.jpg" alt="" />
        <div className={styles.captionContainer}>
          <h1 className={styles.caption}>HEHEHE</h1>
        </div>
      </div>
      <div className={styles.slide}>
        <img className={styles.image} src="https://source.unsplash.com/random?landscape,city" alt="" />
        <div className={styles.captionContainer}>
          <h1 className={styles.caption}>HEHEHE</h1>
        </div>
      </div>
      <button className={styles.btnNext} onClick={nextSlide}><ArrowRight /></button>
      <button className={styles.btnPrev} onClick={prevSlide}><ArrowLeft /></button>
    </div>
  );
}
