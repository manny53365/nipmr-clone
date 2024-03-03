// library imports
import { Link } from 'react-router-dom';

// styles imports
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.happening}>
            <h2>{'What\'s New'}</h2>
            <Link to='/workshops'>Upcoming Workshops</Link>
            <Link to='/workshops'>Recently Conducted Workshops</Link>
            <Link to='/purchase'>Tenders</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/careers'>Careers</Link>
        </div>
        <div>
            <h2>Events/News</h2>
        </div>
        <div className={styles.contact}>
            <h2>Contact Us</h2>
            <p>
                National Institute of Physical <br />
                Medicine and Rehabilitation(NIPMR), <br />
                Kallettumkara P.O, <br />
                Thrissur – 680683
            </p>
            <p>
                P: 0480-288-1959, +91 7510870111 <br />
                E: <Link to='mailto:info@nipmr.org.in'>info@nipmr.org.in</Link>
            </p>
            <h3>Connect with us on Social Media</h3>
            <div className={styles['social-links']}>
                <Link>FB</Link>
                <Link>Insta</Link>
                <Link>LinkedIn</Link>
                <Link>YouTube</Link>
            </div>
        </div>
        <div>
            <h2>4</h2>
        </div>
    </div>
  )
}
