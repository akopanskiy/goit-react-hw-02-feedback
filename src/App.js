import React, { Component } from 'react';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/Buttons';
import Section from './components/Section';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  feedbackCounter = e => {
    const feedbackValue = e.target.value;

    this.setState(prevState => ({
      [feedbackValue]: prevState[feedbackValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = Math.round(this.countPositiveFeedbackPercentage());
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <Section>
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            percentage={percentage}
          />
        </Section>
      </>
    );
  }
}
export default App;
