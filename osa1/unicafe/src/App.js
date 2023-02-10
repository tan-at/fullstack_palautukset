import { useState } from "react";

const History = (props) => {
  if (props.totalClicks.length === 0) {
    return <div>No feedback given</div>;
  }
  return <div>button press history: {props.totalClicks.join(" ")}</div>;
};

const All = (props) => {
  return props.totalClicks.length;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [count, setCount] = useState(0);
  const [positive, setPositive] = useState(0);
  const [totalClicks, setTotal] = useState([]);

  const handleGoodClick = () => {
    setTotal(totalClicks.concat(1));
    setGood(good + 1);
    setAll(all + 1);
    setPositive(positive + 1);
    setCount(count + 1);
  };
  const handleNeutralClick = () => {
    setTotal(totalClicks.concat(0));
    setNeutral(neutral + 1);
    setAll(all + 1);
    setCount(count + 0);
  };
  const handleBadClick = () => {
    setTotal(totalClicks.concat(-1));
    setBad(bad + 1);
    setAll(all + 1);
    setCount(count - 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {count / all}</p>
        <p>positive {positive / all} %</p>
        <History totalClicks={totalClicks} />
      </div>
    </div>
  );
};

export default App;
