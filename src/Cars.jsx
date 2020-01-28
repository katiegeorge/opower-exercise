import React from 'react';
import './styles/main.scss';
import Car from './assets/car.svg';
import GhostCar from './assets/car-empty.svg';

function Cars() {
    const numSavedCars = 6;
    const numRemainingCars = 15;
    const savedCars = [...Array(numSavedCars)].map((e, i) => <img src={GhostCar} className="image" />);
    const remainingCars = [...Array(numRemainingCars)].map((e, i) => <img src={Car} className="image" />);

    return (
        <React.Fragment>
            {savedCars}{remainingCars}
        </React.Fragment>
    );
}

export default Cars;
