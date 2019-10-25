const Picture = require('./Picture');
const Hotel = require('./Hotel');

console.log('Problem 1: Rotate picture');
const grid = [
  [0, 16, 255, 1],
  [8, 128, 32, 3],
  [0, 0, 0, 3],
  [8, 128, 32, 3],
];
const picture = new Picture(grid);

const time = 1;
const matrix = picture.rotates(time);
console.log(matrix);


console.log('Problem 4: Hotel Reservation');
const arrivals = [1, 3, 5, 9];
const departures = [2, 4, 9, 10];
const room = 1;

const hotel = new Hotel(room);
const result = hotel.booking(arrivals, departures);
console.log(result);
