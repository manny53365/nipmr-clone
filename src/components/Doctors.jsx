// library or page imports
import PropTypes from 'prop-types';

// style imports
import styles from './Doctors.module.css';

export default function Doctors({ doctors }) {
  return (
    <div className={styles.doctors}>
        {doctors.map(doctor => (
            <div key={doctor.name} className={styles.doctor}>
                <img src={doctor.image} alt="Doctor" />
                <h3>{doctor.name}</h3>
                <p>{doctor.title}</p>
            </div>
        ))}
    </div>
  )
}

Doctors.propTypes = {
    doctors: PropTypes.array
}
