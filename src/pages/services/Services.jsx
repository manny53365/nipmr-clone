import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.services}>
        <h1>For Parents/Patients</h1>
        <div className={styles['services-container']}>
            <div className={styles['service-item']}>
                <h4>Physical Medicine & Rehabilitation</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Developmental and Behavioural Pediatrics</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Physiotherapy</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Occupational Therapy</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Audiology & Speech Language Pathology</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Developmental Therapy</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Clinical Psychology</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Dental Care</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Social Work</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Nutrition & Dietetics</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>P&O Assistive Technology</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>RARRC - School for children with Autism</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>CPRRC - Special Transition school for CP</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Aquatic Rehabilitation Center</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Virtual Rehabilitation Unit</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>GAIT & Motion Analysis Lab</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Simulation Kitchen & ADL Room</h4>
            </div>
            <div className={styles['service-item']}>
                <h4>Vocational Education</h4>
            </div>
        </div>
    </div>
  )
}
