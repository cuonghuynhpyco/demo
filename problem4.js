function bookingRoom (arrivals, departures, k) {
  if (arrivals.length !== departures.length) {
    return false;
  }

  if (k == 0 && arrivals.length > 0) {
    return false;
  }
  let errorBookingRoom = false;
  let sameBookedRoom = 1;
  arrivals.map((arrival, i) => {
    const departure = departures[i];
    if (arrival > departure) {
      errorBookingRoom = true;
    }
    if (i == 0) {
      return;
    }
    const prevDeparture = departures[i - 1];
    if (arrival < prevDeparture) {
      sameBookedRoom ++;
    }
  });

  if (errorBookingRoom) {
    return false;
  }

  if (sameBookedRoom > k) {
    return false;
  }

  return true;
}

const arrivals = [1, 3, 5, 9];
const departures = [2, 4, 9, 8];
const k = 1;
const result = bookingRoom (arrivals, departures, k);
console.log(result);