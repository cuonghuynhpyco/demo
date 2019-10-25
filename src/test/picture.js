const assert = require('assert');
const Picture = require('../Picture');

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
});
