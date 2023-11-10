import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { title, good, neutral, bad, total, percentage } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <ul>
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
            <p>Total:{total}</p>
          </li>
          <li>
            <p>Positive feedback: {percentage}</p>
          </li>
        </ul>
      </>
    );
  }
}
