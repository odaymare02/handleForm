import { useState } from "react";

export default function Player() {
  const [score, setScore] = useState(0);

  function handlePlusClick() {
    setScore(score + 1)
  }
  return (
    <>
      <label>
        Score: <b>{score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
        />
      </label>
      <label>
        Last name:
        <input
        />
      </label>
    </>
  );
  }