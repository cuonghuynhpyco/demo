/**
 * Hotel
 */
module.exports = class Hotel {
  /**
   * init Hotel
   * @param {Number} rooms
   */
  constructor(rooms = 0) {
    this._rooms = rooms;
  }

  /**
   * booking
   * @param {Array} arrivals
   * @param {Array} departures
   * @return {Boolean}
   */
  booking(arrivals, departures) {
    try {
      if (this._rooms === 0) {
        throw new Error('room_is_invalid');
      }
      if (arrivals.length !== departures.length) {
        throw new Error('arrivals or departures is invalid');
      }

      let bookedRoom = 0;
      const booked = {};
      arrivals.map((arrival, i) => {
        const departure = departures[i];
        if (arrival > departure) {
          throw new Error('arrival > departure');
        }

        for (let index = arrival; index <= departure; index++) {
          if (!booked[index]) {
            booked[index] = 1;
          } else {
            booked[index]++;
          }

          if (bookedRoom < booked[index]) {
            bookedRoom = booked[index];
          }
        }
      });
      if (bookedRoom > this._rooms) {
        throw new Error('not enough rooms for booking');
      }

      return true;
    } catch (error) {
      return false;
    }
  }
};
