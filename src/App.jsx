import { useState } from "react";

function App() {
  let numbers = [];
  for (let i = 1; i < 91; i++) {
    numbers.push({
      value: i,
      isActive: false,
    });
  }

  let newNumbers = [];
  let number = 0;

  // funzione che estrae un numero
  const callNumber = () => {
    if (calledNumbers.length < 90) {
      number = Math.floor(Math.random() * (90 - 1 + 1) + 1);

      // se il numero è già stato estratto allora:
      if (calledNumbers.includes(number)) {
        console.log(
          `Il numero ${number} è già stato estratto, estraggo un altro numero...`
        );
        callNumber();
      }

      newNumbers = [...calledNumbers, number];

      setCalledNumbers(newNumbers);
      console.log(newNumbers);
    }
  };

  const [calledNumbers, setCalledNumbers] = useState([]);

  return (
    <>
      <div className="container  p-5 mt-5">
        <h1 className=" mb-3 p-3 d-inline-block">
          Il gioco della <i>Tombola</i>
        </h1>
        <div className="row">
          <div className="col-8 d-flex flex-wrap">
            {numbers.map((number) => {
              return (
                <span
                  key={number.value}
                  className={`number-container rounded ${
                    calledNumbers.includes(number.value)
                      ? "text-bg-info border"
                      : ""
                  }`}
                >
                  {number.value}
                </span>
              );
            })}
          </div>
          <div className="col-4 mt-2">
            <h2>
              {calledNumbers.length > 0 ? (
                <span>
                  {" "}
                  E' stato estratto il numero{" "}
                  <i>{calledNumbers[calledNumbers.length - 1]}</i>
                </span>
              ) : (
                "Chiama un numero per iniziare la partita!"
              )}
            </h2>
            {calledNumbers.length < 90 ? (
              <button onClick={callNumber} className="btn btn-primary mt-3">
                <i className="text-light">Chiama numero</i>
              </button>
            ) : (
              <h2 className="mt-5">
                <i>Comlpimenti, hai vinto!</i>
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
