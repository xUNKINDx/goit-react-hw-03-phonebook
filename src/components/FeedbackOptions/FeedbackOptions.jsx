import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { handleGoodClick, handleNeutralClick, handleBadClick } = this.props;

    return (
      <>
      <section>
        <ul style={{
        display: 'flex',
        marginLeft: '30px',
        padding: '0',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}>
          <li>
            <button className="button" onClick={handleGoodClick}>
              Good
            </button>
          </li>
          <li>
            <button className="button" onClick={handleNeutralClick}>Neutral</button>
          </li>
          <li>
            <button className="button" onClick={handleBadClick}>Bad</button>
          </li>
        </ul>
        </section>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  handleGoodClick: PropTypes.func.isRequired,
  handleNeutralClick: PropTypes.func.isRequired,
  handleBadClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
