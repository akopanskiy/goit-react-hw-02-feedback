import React from 'react';
import PropTypes from 'prop-types';
import NotificationMessage from '../Notification';
import styles from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2 className={styles.title}>Statistic</h2>
      {total > 0 ? (
        <ul className={styles.statList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </ul>
      ) : (
        <NotificationMessage text={'No feedback given'} />
      )}
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistic;
