import {combineReducers} from 'redux';
import CarsRedicers from './car';

const allRedicers = combineReducers({
  cars: CarsRedicers
});

export default allRedicers;
