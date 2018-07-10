import {combineReducers} from 'redux';
import CarsRedicers from './car';
import ActiveCar from './car-active';

const allRedicers = combineReducers({
  cars: CarsRedicers,
  active: ActiveCar
});

export default allRedicers;
