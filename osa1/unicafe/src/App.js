import { useState } from "react";
import "./App.css";

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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};

const StatisticLine = (props) => {
  const a = Object.values(props);
  if (a[0] === "positive") {
    return (
      <table>
        <tbody>
          <tr>
            <td>{a[0]}</td>
            <td>{a[1]} %</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>{a[0]}</td>
          <td>{a[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [totalClicks, setTotal] = useState([]);

  const handleGoodClick = () => {
    setTotal(totalClicks.concat(1));
  };
  const handleNeutralClick = () => {
    setTotal(totalClicks.concat(0));
  };
  const handleBadClick = () => {
    setTotal(totalClicks.concat(-1));
  };
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        <h1>statistics</h1>
        <Statistics totalClicks={totalClicks} />
      </div>
    </div>
  );
};

export default App;
