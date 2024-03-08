// library or page imports
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// style imports
import styles from './Professional.module.css';

export default function ProfessionalItem({ hoveredItem , profession, handleMouseOut, handleMouseOver }) {
  return (
    <div className={styles['profession-item']} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} >
        <img src={hoveredItem === profession.path ? profession.hoveredImg : profession.defaultImg} alt="image" />
        <Link to={profession.path}>{profession.text}</Link>
    </div>
  )
}

ProfessionalItem.propTypes = {
    profession: PropTypes.object,
    handleMouseOut: PropTypes.func,
    handleMouseOver: PropTypes.func,
    hoveredItem: PropTypes.string
}
