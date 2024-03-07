// library or page imports
import { useState } from 'react';
import ServiceItem from './ServiceItem';

// style imports
import styles from './Services.module.css';

export default function Services() {

    const [hoveredItem, setHoveredItem] = useState(null)

    const handleMouseOver = (id) => {
        setHoveredItem(id);
    }

    const handleMouseOut = () => {
        setHoveredItem(null)
    }

    const services = [
        {path: '/physical-medicine', text: 'Physical Medicine & Rehabilitation'},
        {path: '/developmental-and-behavioural-pediatrics', text: 'Developmental and Behavioural Pediatrics'},
        {path: '/physiotherapy', text: 'Physiotherapy'},
        {path: '/occupational-therapy', text: 'Occupational Therapy'},
        {path: '/audiology', text: 'Audiology & Speech Language Pathology'},
        {path: '/developmental-therapy', text: 'Developmental Therapy'},
        {path: '/clinical-psychology', text: 'Clinical Psychology'},
        {path: '/dental', text: 'Dental Care'},
        {path: '/social-work', text: 'Social Work'},
        {path: '/nutrition-dietetics', text: 'Nutrition & Dietetics'},
        {path: '/p-o-assistive', text: 'P&O Assistive Technology'},
        {path: '/rarrc', text: 'RARRC - School for children with Autism'},
        {path: '/cprrc', text: 'CPRRC - Special Transition school for CP'},
        {path: '/hydrotherapy', text: 'Aquatic Rehabilitation Center'},
        {path: '/virtual-reality', text: 'Virtual Rehabilitation Unit'},
        {path: '/gait-and-motion', text: 'GAIT & Motion Analysis Lab'},
        {path: '/simulation-kitchen', text: 'Simulation Kitchen & ADL Room'},
        {path: '/vocational-education', text: 'Vocational Education'}
    ]

  return (
    <div className={styles.services}>
        <h1>For Parents/Patients</h1>
        <div className={styles['services-container']}>
            {services.map(service => (
                <ServiceItem hoveredItem={hoveredItem} key={service.path} service={service} handleMouseOut={handleMouseOut} handleMouseOver={() => handleMouseOver(service.path)} />
            ))}
        </div>
    </div>
  )
}
