import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Load count from localStorage or start at 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount) : 0;
  });

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">🧮 Counter App</h1>
      <div className="text-4xl mb-4">Counter Value: {count}</div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={count === 0}
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
