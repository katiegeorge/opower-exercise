import React, { useState } from 'react';
import './styles/main.scss';

import Cars from './Cars';
import Trees from './Trees';
import Switch from './Switch';
import Chart from './Chart';
import data from './data.json';


function App() {
  const [isChecked, setIsChecked] = useState('trees');

  function toggleValue() {
    setIsChecked(!isChecked);
  }

  const energySavings = isChecked ? 'plant 12 pine trees' : 'take 6 cars off the road' ;
  const paragraphSavings = isChecked ? 
    'equivalent to the energy given off by twelve pines trees' :
    'enough to offset the energy consumption of six average-size cars for one month';

  const { currentYear, priorYear } = data.energyUse;

  return (
    <div className="block">
      <h1>Your electricity savings</h1>
      <div className="grid grid-md-1 grid-lg-2">
        <div>
          <h2>
            Last month, you saved enough energy to {energySavings}!
          </h2>
          <p>
            Great job! You used {currentYear} kwh last month, compared to {priorYear}
            {' '}kwh in the same month last year. The resulting savings is {paragraphSavings}.
          </p>
          <Chart priorYear={priorYear} currentYear={currentYear} />
        </div>
        <div>
          <div className="block block__small">
            <div className="grid grid-xs-3 grid-md-4">
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
