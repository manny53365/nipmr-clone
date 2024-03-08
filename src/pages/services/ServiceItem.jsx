// library or page imports
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// style imports
import styles from './Services.module.css';

export default function ServiceItem({ hoveredItem , service, handleMouseOut, handleMouseOver }) {
  return (
    <div className={styles['service-item']} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} >
        <img src={hoveredItem === service.path ? service.hoveredImg : service.defaultImg} alt="image" />
        <Link to={service.path}>{service.text}</Link>
    </div>
  )
}

ServiceItem.propTypes = {
    service: PropTypes.object,
    handleMouseOut: PropTypes.func,
    handleMouseOver: PropTypes.func,
    hoveredItem: PropTypes.string
}
