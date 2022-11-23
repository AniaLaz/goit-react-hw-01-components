import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({title, stats}) => {
 
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className={css.stat_lis}>
          {stats.map(state => (
            <li className={css.item} key={state.id}>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
