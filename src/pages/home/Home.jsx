// Page or component imports
import Carousel from '../../components/Carousel';

// Style imports
import styles from './Home.module.css';

export default function Home() {

    const carouselImages = [
        'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/carousel%2Fwho_accolade.jpg?alt=media&token=fbea4c5d-aab1-4486-bed7-88e242295eec',
        'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/carousel%2Fadmission.jpeg?alt=media&token=c17b88b9-0df3-4b31-bcfb-839161b68391',
        'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/carousel%2Frlist-ot.jpg?alt=media&token=070f4c29-25e6-4272-bcf4-b6b97a82aacd',
        'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/carousel%2Fnotif1.jpeg?alt=media&token=2b71acb0-7609-4bba-a417-ad1d0fd121ca',
        'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/carousel%2FSW%20DAY%202022.jpg?alt=media&token=2a8561d9-b82b-4e54-8440-fd4199644814'
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
