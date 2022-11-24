import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';


const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.transaction_title}>
          <th className={css.colon}>Type</th>
          <th className={css.colon}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className={css.transaction_table}>
          <tr className={css.transaction_colon}>
            <td className={css.colon}>{item.type}</td>
            <td className={css.colon}>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;
