import { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ images }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const nextSlide = () => {
        setActiveIdx(prevIdx => prevIdx === images.length - 1 ? 0 : prevIdx + 1);
    }
    const prevSlide = () => {
        setActiveIdx(prevIdx => prevIdx === 0 ? images.length - 1 : prevIdx - 1);
    }
  return (
    <div className={styles.carousel}>
        <img className={styles['carousel-img']} src={images[activeIdx]} alt="carousel" />
        <div className={styles['btn-controller']}>
            <button className={styles.btn} onClick={prevSlide}>&lt;</button>
            <button className={styles.btn} onClick={nextSlide}>&gt;</button>
        </div>
    </div>
  )
}
