import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ title, stats, color }) => {
  console.log(color);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_lis}>
        {stats.map(state => (
          <li className={css.item} key={state.id} style={{backgroundColor:`${color}`}}>
            <span className={css.label}>{state.label}</span>
            <span className="percentage">{state.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;