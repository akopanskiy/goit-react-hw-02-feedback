import React from 'react';
import styles from '../Statistic/Statistic.module.css';

const NotificationMessage = ({ text }) => {
  return <p className={styles.notify}>{text}</p>;
};
export default NotificationMessage;
