import React from 'react';
import './styles/main.scss';
import Car from './assets/car.svg';

function Cars() {
    const numSavedCars = 6;
    const numRemainingCars = 15;
    const savedCars = [...Array(numSavedCars)].map(
        (e, i) => <img src={Car} alt="cars that are saved by energy" className="rumble image image__ghost" />
    );
    const remainingCars = [...Array(numRemainingCars)].map(
        (e, i) => <img alt="remaining cars" src={Car} className="rumble image" />
    );

    return (
        <React.Fragment>
            {savedCars}{remainingCars}
        </React.Fragment>
    );
}

export default Cars;
