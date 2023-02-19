import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor() {
    super();
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }

  handleGoodClick() {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  handleNeutralClick() {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  handleBadClick() {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
    return (
      <div style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGoodClick={this.handleGoodClick}
            handleNeutralClick={this.handleNeutralClick}
            handleBadClick={this.handleBadClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
}

export default App;
