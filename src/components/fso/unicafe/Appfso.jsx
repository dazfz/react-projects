import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = (good / all) * 100;

  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={good} />
            <StatisticLine text="bad" value={good} />
          </tbody>
        </table>
        <p>no feedbacks given</p>
      </>
    );
  else
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={avg.toFixed(2)} />
            <StatisticLine text="positive" value={`${positive.toFixed(2)}%`} />
          </tbody>
        </table>
      </>
    );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = ({ handler, name }) => {
  return <button onClick={handler}>{name}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => setGood(good + 1)} name="good" />
      <Button handler={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handler={() => setBad(bad + 1)} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
