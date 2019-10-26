const assert = require('assert');
const Picture = require('../Picture');

function random(low, high) {
  return Math.random() * (high - low) + low
}

describe('Picture UTC', function() {
  it('should return [] with grid is not array', function() {
    const grid = 'test';

    const picture = new Picture(grid);
    const actual = picture.rotates(1);
    assert.equal(actual.length, 0);
  });

  it('should return correct matrix', function() {
    const grid = [
      [0, 16, 255, 1],
      [8, 128, 32, 3],
      [0, 0, 0, 3],
      [8, 128, 32, 3],
    ];

    const expected = [
      [8, 0, 8, 0],
      [128, 0, 128, 16],
      [32, 0, 32, 255],
      [3, 3, 3, 1],
    ];

    const picture = new Picture(grid);
    const actual = picture.rotates(1);
    assert.deepEqual(actual, expected);
  });

  it('should return correct matrix with n = 10000', function() {
    const start = new Date();
    console.log('start time:', start);
    const grid = [];
    const len = 10000;
    for (let i = 0; i < len; i++) {
      const row = [];
      for (let j = 0; j < len; j++) {
        const val = 1;
        row.push(val);
      }
      grid.push(row);
    }

    const pushed = new Date();
    console.log('pushed:', pushed);
    const picture = new Picture(grid);
    const actual = picture.rotates(1);
    const end = new Date();
    console.log('end:', end);
    assert.equal(Array.isArray(actual), true);

    timeDifference = Math.abs(end.getTime() - pushed.getTime());
    console.log('progress in:', timeDifference);
  });
});
