// library or page imports
import { useState } from 'react';
import ProfessionalItem from './ProfessionalItem';

// style imports
import styles from './Professional.module.css';

export default function Professional() {

    const [hoveredItem, setHoveredItem] = useState(null)

    const handleMouseOver = (id) => {
        setHoveredItem(id);
    }

    const handleMouseOut = () => {
        setHoveredItem(null)
    }

    const professions = [
        {
            path: '/physical-medicine',
            text: 'Physical Medicine & Rehabilitation',
            defaultImg:'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FPhysical%20Medicine%20%26%20Rehabilitation.svg?alt=media&token=37a4607f-a22b-4ac5-b709-9f33fe521b7b',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fphysical-medicine-and-rehabilitation.jpeg?alt=media&token=df267f75-02e7-4b15-9532-09eb6d089707'
        },
        {
            path: '/developmental-and-behavioural-pediatrics',
            text: 'Developmental and Behavioural Pediatrics',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FDevelopmental%20and%20Behavioural%20Pediatrics.svg?alt=media&token=294f34fd-8bcd-404b-853d-30d90074df61',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fphysical-medicine-and-rehabilitation.jpeg?alt=media&token=df267f75-02e7-4b15-9532-09eb6d089707'
        },
        {
            path: '/physiotherapy',
            text: 'Physiotherapy',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FPsyiotherapy.svg?alt=media&token=44af94d1-4031-4f4f-958c-33928044a213',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fmotion.png?alt=media&token=40ca0be1-f96a-4e72-ba74-679c7ddacbc3'
        },
        {
            path: '/occupational-therapy',
            text: 'Occupational Therapy',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FOccupational-Therapy.svg?alt=media&token=53c40aed-f26b-4598-bfe4-2a93a0cea8ae',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Foccupational-therapy.png?alt=media&token=56e1896d-0942-4be3-b299-438df7379219'
        },
        {
            path: '/audiology',
            text: 'Audiology & Speech Language Pathology',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FAudiology%20%26%20Speech.svg?alt=media&token=ae981223-931a-488b-9b91-a1742df3c5a2',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Faudiology.jpeg?alt=media&token=144649da-1139-4245-bf91-cf3ccaf64c30'
        },
        {
            path: '/developmental-therapy',
            text: 'Developmental Therapy',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FDevelopmental-Therapy.svg?alt=media&token=0e299a7b-dc7e-497d-960c-ba2d53171661',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fdevelopmental-therapy-2.jpeg?alt=media&token=1ad3fa40-ea81-45b6-bb12-4d3f537eca7f'
        },
        {
            path: '/clinical-psychology',
            text: 'Clinical Psychology',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FPsychology.svg?alt=media&token=35792c29-f61e-4608-8c1f-88e835e944b2',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fphysical-medicine-and-rehabilitation.jpeg?alt=media&token=df267f75-02e7-4b15-9532-09eb6d089707'
        },
        {
            path: '/social-work',
            text: 'Social Work',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FSocial%20Work.svg?alt=media&token=eefc497a-d3ea-49ea-a542-a791ef7f71d2',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fsocial-work.jpeg?alt=media&token=24a3ea35-8034-42bf-aa54-a86367fbeb2e'
        }
    ]

  return (
    <div className={styles.professions}>
        <h1>Know More About NIPMR Professional Side</h1>
        <div className={styles['professional-container']}>
            {professions.map(profession => (
                <ProfessionalItem hoveredItem={hoveredItem} key={profession.path} profession={profession} handleMouseOut={handleMouseOut} handleMouseOver={() => handleMouseOver(profession.path)} />
            ))}
        </div>
    </div>
  )
}
