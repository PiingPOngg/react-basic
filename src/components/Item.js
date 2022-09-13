import PropTypes from 'prop-types'; // ES6
import './Item.css'

function Item(props){
  const {title,amount} = props
  const status = amount < 0 ? "Expenses":"Income"
  const symbol = amount < 0 ? "-":"+";
  
  function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return(
    <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
  );
}

Item.prototype={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}
export default Item