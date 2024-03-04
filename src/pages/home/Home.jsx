// Page or component imports
import Carousel from '../../components/Carousel';

// Style imports
import styles from './Home.module.css';

export default function Home() {

    const carouselImages = [
        'https://via.placeholder.com/800x400/ff5733/fff',
        'https://via.placeholder.com/800x400/33ff57/fff',
        'https://via.placeholder.com/800x400/5733ff/fff',
    ];

  return (
    <div className={styles['home-container']}>
        <div className={styles['main-container']}>
            <div className={styles['left-main']}>
                <Carousel images={carouselImages}/>
            </div>
            <div className={styles['right-main']}>

            </div>
        </div>
    </div>
  )
}
