import React, { useState } from 'react';
import './styles/main.scss';

import Cars from './Cars';
import Trees from './Trees';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  function toggleValue() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="block">
      <h1>Your electricity savings</h1>
      <div className="block--row">
        <div className="block">
          { isChecked ? <Trees /> : <Cars /> }
          <input
            aria-checked={isChecked}
            role="checkbox"
            type="checkbox"
            onChange={toggleValue}
            checked={isChecked}
          />
        </div>
        <div className="block">
          <h2>
            Last month, you saved enough energy to take 8 cars off the road!
          </h2>
          <p>
            Great job! You used 573 kwh last month, compared to 
            791 kwh in the same month last year. The resulting savings
            is enough to offset the energy consumption of six average-size
            cars for one month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
