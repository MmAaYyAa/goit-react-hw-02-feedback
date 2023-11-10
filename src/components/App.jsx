import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import CategoriesButton from './CategoriesButton/CategoriesButton';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();

    const percentage = (this.state.good / sum) * 100;
    return percentage;
  };

  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <CategoriesButton
            categories={Object.keys(this.state)}
          ></CategoriesButton>
        </SectionTitle>

        <Statistics
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </>
    );
  }
}

/* <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: </p>
          </li>
          <li>
            <p>Neutral: </p>
          </li>
          <li>
            <p>Bad: </p>
          </li>
        </ul>
      </div> */
