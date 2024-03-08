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
            path: '/dental',
            text: 'Dental Care',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FDental.png?alt=media&token=c48fc4a9-5899-4ec7-bc08-e67e5c0b646f',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fdental.jpeg?alt=media&token=665a9c49-2748-40e5-816b-b0b285baa651'
        },
        {
            path: '/social-work',
            text: 'Social Work',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FSocial%20Work.svg?alt=media&token=eefc497a-d3ea-49ea-a542-a791ef7f71d2',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fsocial-work.jpeg?alt=media&token=24a3ea35-8034-42bf-aa54-a86367fbeb2e'
        },
        {
            path: '/nutrition-dietetics',
            text: 'Nutrition & Dietetics',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FNutrition.svg?alt=media&token=0783bb69-3fa8-4b22-9f83-a43aa6feb18a',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FDIETARY%20COUNSELLING.jpg?alt=media&token=0ed8564d-0a50-41cf-8721-dd0b8409e53c'
        },
        {
            path: '/p-o-assistive',
            text: 'P&O Assistive Technology',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Flimb%20P%20%26%20O.svg?alt=media&token=27f391e8-d5a8-4619-bde8-f3a41fa4f01a',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fphysical-medicine-and-rehabilitation.jpeg?alt=media&token=df267f75-02e7-4b15-9532-09eb6d089707'
        },
        {
            path: '/rarrc',
            text: 'RARRC - School for children with Autism',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FRARRC.svg?alt=media&token=80955a48-bc39-4ed6-9241-50828d5397c0',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Frarrc_cover.png?alt=media&token=ce0dd7e4-bc06-4a01-ac56-570315c166c4'
        },
        {
            path: '/cprrc',
            text: 'CPRRC - Special Transition school for CP',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FCPRRC.png?alt=media&token=6309128c-43df-4f55-a3d9-7bd367e6539e',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fcprrc_class.png?alt=media&token=ea52f813-7b47-478a-a8c8-957c4694671d'
        },
        {
            path: '/hydrotherapy',
            text: 'Aquatic Rehabilitation Center',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fhydrotherapy.svg?alt=media&token=0fe5e516-9e51-4bc4-a7d6-d7298b25cf5b',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FHydrotherapy.png?alt=media&token=91e6d8df-a1c0-4638-8af8-1fea078d9f6a'
        },
        {
            path: '/virtual-reality',
            text: 'Virtual Rehabilitation Unit',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fvirtual-reality.svg?alt=media&token=7e08e746-df8f-4a3f-b8ed-579a69f5ff06',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fvr-2_wide.png?alt=media&token=eba25f97-2ef3-4a00-b8de-6c4898d56c86'
        },
        {
            path: '/gait-and-motion',
            text: 'GAIT & Motion Analysis Lab',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FGait%20motion%20sensor.svg?alt=media&token=7b0afdce-8cfe-40ee-9622-5ce795f712d4',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fmotion.png?alt=media&token=40ca0be1-f96a-4e72-ba74-679c7ddacbc3'
        },
        {
            path: '/simulation-kitchen',
            text: 'Simulation Kitchen & ADL Room',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2FGait%20motion%20sensor.svg?alt=media&token=7b0afdce-8cfe-40ee-9622-5ce795f712d4',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fmotion.png?alt=media&token=40ca0be1-f96a-4e72-ba74-679c7ddacbc3'
        },
        {
            path: '/vocational-education',
            text: 'Vocational Education',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fsewing-machine.svg?alt=media&token=600b452d-47ef-4309-b78d-fb19964b74f0',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/service-images%2Fvocational-education.png?alt=media&token=6ba89616-53cb-4110-b745-8afcfaf5616f'
        }
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
