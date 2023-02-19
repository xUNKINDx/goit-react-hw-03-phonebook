import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;

    if (countTotalFeedback() === 0) {
      return (
        <>
          <Notification message="There is no feedback"></Notification>
        </>
      );
    }

    return (
      <>
        <ul style={{display: 'flex',
      flexDirection: 'column'}}>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {countTotalFeedback()}</p>
          </li>
          <li>
            <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
