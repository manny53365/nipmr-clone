
// image imports
import nipmr_logo from '../assets/nipmr_logo.png';
import soc_logo from '../assets/soc_logo.png';
import group_logo from '../assets/group_images.png';
import kerala_govt_logo from '../assets/kerala_govt.png';

// styles
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles['main-images-container']}>
            <Link to={'/'}><img src={nipmr_logo} alt="nipmr" /></Link>
            <img src={soc_logo} alt="soc" />
            <img src={kerala_govt_logo} alt="Kerala Government" />
        </div>
        <div className={styles['right-container-nav']}>
            <img src={group_logo} alt="Group of Logos" />
            <div>
                {/* Hamburger */}
            </div>
        </div>
    </div>
  )
}
