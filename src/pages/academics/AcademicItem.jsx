// library or page imports
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// style imports
import styles from './Academics.module.css';

export default function AcademicItem({ hoveredItem , edu, handleMouseOut, handleMouseOver }) {
  return (
    <div className={styles['academic-item']} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
        <img src={hoveredItem === edu.path ? edu.hoveredImg : edu.defaultImg} alt="image" />
        <Link to={edu.path}>{edu.text}</Link>
    </div>
  )
}

AcademicItem.propTypes = {
    edu: PropTypes.object,
    handleMouseOut: PropTypes.func,
    handleMouseOver: PropTypes.func,
    hoveredItem: PropTypes.string
}
