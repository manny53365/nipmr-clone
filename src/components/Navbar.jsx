
// image imports
import nipmr_logo from '../assets/nipmr_logo.png';
import soc_logo from '../assets/soc_logo.png';
import group_logo from '../assets/group_images.png';
import kerala_govt_logo from '../assets/kerala_govt.png';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <img src={nipmr_logo} alt="nipmr" />
        <img src={soc_logo} alt="soc" />
        <img src={kerala_govt_logo} alt="Kerala Government" />
        <img src={group_logo} alt="Group of Logos" />
    </div>
  )
}
