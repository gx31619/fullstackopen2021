import { useState } from "react";

const Header = ({ message }) => {
  return <h1>{message}</h1>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const calculateTotal = () => {
    return good + neutral + bad;
  };
  const calculateAverage = () => {
    return (good - bad) / calculateTotal();
  };
  const calculatePositivePercentage = () => {
    return (good / calculateTotal()) * 100 + " %";
  };
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <Header message="statistics" />
        No feedback given
      </div>
    );
  }
  return (
    <div>
      <Header message="statistics" />
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={calculateTotal()} />
          <StatisticLine text="average" value={calculateAverage()} />
          <StatisticLine
            text="positive"
            value={calculatePositivePercentage()}
          />
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <Header message="give feedback" />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
