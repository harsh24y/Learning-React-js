import { useState } from "react";

function Proj1() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounters = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Dynamic Counters App</h1>

      <button
        className="mb-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        onClick={addCounters}
      >
        Add Counter
      </button>

      <ul className="space-y-4 w-full max-w-md">
        {counters.map((counter) => (
          <li
            key={counter.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded"
          >
            <span className="text-lg font-medium">
              Counter {counter.id} : {counter.value}
            </span>
            <button
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
              onClick={() => incrementCounter(counter.id)}
            >
              Increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proj1;
