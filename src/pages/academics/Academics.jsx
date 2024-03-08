// library or page imports
import { useState } from 'react';

// style imports
import styles from './Academics.module.css';
import AcademicItem from './AcademicItem';
import { Link } from 'react-router-dom';

export default function Academics() {

    const [hoveredItem, setHoveredItem] = useState(null)

    const handleMouseOver = (id) => {
        setHoveredItem(id);
    }

    const handleMouseOut = () => {
        setHoveredItem(null)
    }

    const programs = [
        {
            path: '/bot',
            text: 'Bachelor of Occupational Therapy',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2FBachelor%20in%20occupation%20therapy.svg?alt=media&token=4a1ab546-0f20-4530-a377-240ca96f5bf6',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2Feducation-class.png?alt=media&token=5ffbf291-b0ce-435d-b05e-6191d263f3a8'
        },
        {
            path: '/dse',
            text: 'Diploma in Special Education (Autism Spectrum Disorder) (R.C.I)',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2FDiploma.svg?alt=media&token=289050a3-74eb-4a1b-a4f5-bdf569630da0',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2Feducation-class.png?alt=media&token=5ffbf291-b0ce-435d-b05e-6191d263f3a8'
        },
        {
            path: '/dcp',
            text: 'Diploma in Special Education(Cerebral Palsy)(R.C.I)',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2FDiploma.svg?alt=media&token=289050a3-74eb-4a1b-a4f5-bdf569630da0',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2Feducation-class.png?alt=media&token=5ffbf291-b0ce-435d-b05e-6191d263f3a8'
        },
        {
            path: '/idd',
            text: 'Diploma in Special Education(IDD)(R.C.I)',
            defaultImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2FDiploma.svg?alt=media&token=289050a3-74eb-4a1b-a4f5-bdf569630da0',
            hoveredImg: 'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/education-programs%2Feducation-class.png?alt=media&token=5ffbf291-b0ce-435d-b05e-6191d263f3a8'
        }
    ]

  return (
    <div className={styles.academic}>
        <div className={styles['anti-ragging-container']}>
            <h1>Bachelors and Diploma courses</h1>
            <div className={styles['anti-ragging-info']}>
                <h4>ANTI RAGGING INFORMATION</h4>
                <Link to='/anti-ragging'>Anti ragging info (UGC)</Link>
                <Link to='/anti-ragging'>Anti ragging ordinance</Link>
                <Link to='/anti-ragging'>Anti ragging policy</Link>
                <Link to='/anti-ragging'>Toll free number</Link>
                <Link to={'https://firebasestorage.googleapis.com/v0/b/nipmr-app.appspot.com/o/anti-ragging-doc%2Fsexual-harrassment-of-women-act-and-rules-2013.pdf?alt=media&token=31a8e27d-176a-4586-b13d-fb3ce7f371a9'} target='_blank'>Sexual harrassment of women: Act and rules, 2013</Link>
            </div>
        </div>
        <div className={styles['academic-container']}>
            {programs.map(program => (
                <AcademicItem hoveredItem={hoveredItem} key={program.path} edu={program} handleMouseOut={handleMouseOut} handleMouseOver={() => handleMouseOver(program.path)}/>
            ))}
        </div>
    </div>
  )
}
