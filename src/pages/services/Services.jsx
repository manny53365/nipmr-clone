import { Link } from 'react-router-dom';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.services}>
        <h1>For Parents/Patients</h1>
        <div className={styles['services-container']}>
            <div className={styles['service-item']}>
                <Link to='/physical-medicine'>Physical Medicine & Rehabilitation</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/developmental-and-behavioural-pediatrics'>Developmental and Behavioural Pediatrics</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/physiotherapy'>Physiotherapy</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/occupational-therapy'>Occupational Therapy</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/audiology'>Audiology & Speech Language Pathology</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/developmental-therapy'>Developmental Therapy</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/clinical-psychology'>Clinical Psychology</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/dental'>Dental Care</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/social-work'>Social Work</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/nutrition-dietetics'>Nutrition & Dietetics</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/p-o-assistive'>P&O Assistive Technology</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/rarrc'>RARRC - School for children with Autism</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/cprrc'>CPRRC - Special Transition school for CP</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/hydrotherapy'>Aquatic Rehabilitation Center</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/virtual-reality'>Virtual Rehabilitation Unit</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/gait-and-motion'>GAIT & Motion Analysis Lab</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/simulation-kitchen'>Simulation Kitchen & ADL Room</Link>
            </div>
            <div className={styles['service-item']}>
                <Link to='/vocational-education'>Vocational Education</Link>
            </div>
        </div>
    </div>
  )
}
