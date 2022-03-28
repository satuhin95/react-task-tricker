
import PropTypes from 'prop-types'
const Button = ({color,title,onClick}) => {
  return (
  <button onClick={onClick} className="btn"  
    style={{backgroundColor:color}}>
    {title}
    </button>
    )
}
Button.propType={
  onClick: PropTypes.func
}

export default Button
