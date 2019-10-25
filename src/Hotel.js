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
      let booked = [];
      arrivals.map((arrival, i) => {
        const departure = departures[i];
        if (arrival > departure) {
          errorBookingRoom = true;
          throw new Error('arrival > departure');
        }
        if (i == 0) {
          return;
        }

        if (booked.includes(arrival)) {
          bookedRoom ++;
        }
        booked.push(arrival);
        const prevDeparture = departures[i - 1];
        if (arrival < prevDeparture) {
          bookedRoom ++;
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
