const assert = require('assert');
const Hotel = require('../Hotel');

describe('Hotel UTC', function() {
  it('should return false with room is 0', function() {
    const hotel = new Hotel(0);

    const arrivals = [1, 3, 5, 9];
    const departures = [2, 4, 9, 10];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, false);
  });

  it('should return false with arrivals != departures', function() {
    const hotel = new Hotel(0);

    const arrivals = [1, 3, 5, 9, 10];
    const departures = [2, 4, 9, 10];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, false);
  });

  it('should return false with arrival > departure', function() {
    const hotel = new Hotel(1);

    const arrivals = [1, 3, 5, 9, 10];
    const departures = [2, 4, 9, 9];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, false);
  });

  it('should return false with arrival > departure', function() {
    const hotel = new Hotel(1);

    const arrivals = [1, 3, 5, 9, 10];
    const departures = [2, 4, 9, 9, 9];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, false);
  });

  it('should return false with not enough room', function() {
    const hotel = new Hotel(1);

    const arrivals = [1, 3, 5, 9, 10];
    const departures = [2, 4, 10, 11, 12];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, false);
  });

  it('should return true with enough room', function() {
    const hotel = new Hotel(2);

    const arrivals = [1, 3, 5, 9, 11];
    const departures = [2, 4, 10, 11, 12];

    const actual = hotel.booking(arrivals, departures);
    assert.equal(actual, true);
  });
});
