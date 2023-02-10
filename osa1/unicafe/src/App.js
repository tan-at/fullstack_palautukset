import { useState } from "react";

const History = (props) => {
  if (props.totalClicks.length === 0) {
    return <div>No feedback given</div>;
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  let lista = props.totalClicks;
  if (lista.length === 0) {
    return <div>No feedback given</div>;
  }
  let good = 0;
  let neutral = 0;
  let bad = 0;
  let all = lista.length;
  let count = 0;

  lista.forEach((x) => {
    if (x === 1) {
      good += 1;
      count += 1;
    }
    if (x === 0) {
      neutral += 1;
    }
    if (x === -1) {
      bad += 1;
      count -= 1;
    }
  });

  let average = count / all;
  let positive = (good * 100) / all;
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

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
        <p>positive {(positive * 100) / all} %</p>
        <p>-----------------------------------------------</p>
        <Statistics totalClicks={totalClicks} />
      </div>
    </div>
  );
};

export default App;
