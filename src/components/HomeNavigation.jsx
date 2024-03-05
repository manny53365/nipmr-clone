// library and page imports
import { Link } from 'react-router-dom';

// style imports
import styles from './HomeNavigation.module.css';

export default function HomeNavigation() {
  return (
    <div className={styles['home-nav-btns']}>
        <Link to='/services'>Services</Link>
        <Link to='/professional'>Professional</Link>
        <Link to='/academics'>Academics</Link>
        <Link to='/research'>Research & Publications</Link>
        <Link to='/treatment'>Treatment Enquiry</Link>
        <Link to='/spine-injury'>Spinal Cord Injury</Link>
        <Link to='/checkout'>Purchase and Tenders</Link>
        <Link to='/careers'>Careers</Link>
    </div>
  )
}
