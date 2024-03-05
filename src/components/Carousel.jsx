// Library or page imports
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Style imports
import styles from './Carousel.module.css';

export default function Carousel({ images, interval = 3000 }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const nextSlide = () => {
        setActiveIdx(prevIdx => prevIdx === images.length - 1 ? 0 : prevIdx + 1);
    }
    const prevSlide = () => {
        setActiveIdx(prevIdx => prevIdx === 0 ? images.length - 1 : prevIdx - 1);
    }

    // autoplay functionality - defaulted to 3000 ms (3 seconds)
    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        };
    },[interval]);

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

Carousel.propTypes = {
    images: PropTypes.array,
    interval: PropTypes.number
}
