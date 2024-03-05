// Page or component imports
import Carousel from '../../components/Carousel';
import Doctors from '../../components/Doctors';
import HomeNavigation from '../../components/HomeNavigation';

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

    const othDoctors = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/oth-doctors%2FPinarayi%20Vijayan.png?alt=media&token=c0d9b88c-e060-4341-9f1a-4520b28b4195',
            name: 'Shri. Pinarayi Vijayan',
            title: 'Chief Minister'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/oth-doctors%2FDr-R-Bindhu.jpeg?alt=media&token=b215fc14-f469-404b-9263-2f1bddec2005',
            name: 'Dr. R Bindu',
            title: 'Minister of Higher Education and Social Justice'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/oth-doctors%2Fpuneet-kumar-ias.png?alt=media&token=23f58198-5b61-436c-af8c-803de2a04ad9',
            name: 'Sri. Puneet Kumar, IAS',
            title: 'Additional Chief Secretary, Social Justice Department'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/oth-doctors%2FDINESHAN%20H%20IAS.jpg?alt=media&token=b4f31364-b779-46a5-844e-e964f6e5b880',
            name: 'Sri. H. Dineshan IAS',
            title: 'Director, Social Justice Department'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/oth-doctors%2FSri%20Chandrababu%20C.png?alt=media&token=18cf890d-9237-441a-a821-b839b01b41af',
            name: 'Sri. Chandrababu C',
            title: 'Executive Director'
        }
    ];

  return (
    <div className={styles['home-container']}>
        <div className={styles['main-container']}>
            <div className={styles['left-main']}>
                <Carousel images={carouselImages}/>
            </div>
            <div className={styles['right-main']}>
                <Doctors doctors={othDoctors}/>
            </div>
        </div>
        <div className={styles['nav-btns']}>
            <HomeNavigation />
        </div>
    </div>
  )
}
