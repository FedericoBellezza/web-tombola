import { useState } from "react";

function App() {
  let numbers = [];
  for (let i = 1; i < 91; i++) {
    numbers.push({
      value: i,
      isActive: false,
    });
  }
  console.log(numbers);

  let newNumbers = [];
  const callNumber = () => {
    const number = Math.floor(Math.random() * (90 - 1 + 1) + 1);
    console.log(number);

    if (newNumbers.includes(number)) callNumber();

    newNumbers = [...calledNumbers, number];

    setCalledNumbers(newNumbers);
    console.log(newNumbers);
  };

  const [calledNumbers, setCalledNumbers] = useState([]);

  return (
    <>
      <div className="container">
        <h1 className="m-3 p-3 d-inline-block">Tombola</h1>
        <div className="d-flex">
          <div className="d-flex flex-wrap">
            {numbers.map((number) => {
              return (
                <span
                  key={number.value}
                  className={`number-container ${
                    calledNumbers.includes(number.value) ? "text-bg-dark" : ""
                  }`}
                >
                  {number.value}
                </span>
              );
            })}
          </div>
          <div>
            <button onClick={callNumber} className="btn btn-primary">
              Chiama numero
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
