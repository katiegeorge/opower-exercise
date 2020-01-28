import React, { useState } from 'react';
import './styles/main.scss';

import Cars from './Cars';
import Trees from './Trees';
import Switch from './Switch';

function App() {
  const [isChecked, setIsChecked] = useState('trees');

  function toggleValue() {
    setIsChecked(!isChecked);
  }

  const energySavings = isChecked ? 'plant 12 pine trees' : 'take 6 cars off the road' ;
  const paragraphSavings = isChecked ? 
    'equivalent to the energy given off by twelve pines trees' :
    'enough to offset the energy consumption of six average-size cars for one month';

  return (
    <div className="block">
      <h1>Your electricity savings</h1>
      <div className="container">
        <div className="container--item">
          <h2>
            Last month, you saved enough energy to {energySavings}!
          </h2>
          <p>
            Great job! You used 573 kwh last month, compared to
            791 kwh in the same month last year. The resulting savings
            is {paragraphSavings}.
          </p>
        </div>
        <div className="container--item">
          <div className="block block__small">
            <div className="image-grid">
              { isChecked ? <Trees /> : <Cars /> }
            </div>
          </div>
          <Switch isChecked={isChecked} toggleValue={toggleValue} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
