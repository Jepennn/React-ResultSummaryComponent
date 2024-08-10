
import PropTypes from 'prop-types';

export default function Sense({ icon, title, score, color }) {
  return (
    <div className={`sense-box ${color}`}>
      <div className='sense-type'>
        <img src={icon} alt="icon" />
        <h6>{title}</h6>
      </div>
      <p><span>{score} </span>/100</p> 
    </div>
  );
}

Sense.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };