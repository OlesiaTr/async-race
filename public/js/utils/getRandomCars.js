import getRandomCarName from './getRandomCarName.js';
import getRandomHexColor from './getRandomHexColor.js';

const getRandomCars = (cars = 100) => new Array(cars)
  .fill(0)
  .map(() => ({ name: getRandomCarName(), color: getRandomHexColor() }));

export default getRandomCars;
