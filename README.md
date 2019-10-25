# Problems
## Rotate picture
Background:
Assume you are implementing a Photo Gallery app. You are requested to help with a feature to rotate the photo on user request. 

For simplicity, let’s assume the photo to be 2D square grid n * n (rows * columns) and each pixel can store 8 bits values (ranging between 0 to 255)
 
Rotating once should rotate the pixel elements by 90 degrees clockwise.
This rotation operation can be called any number of times. 

Todo:
Implement a library function/ module which satisfies the requirement with below input and output 

Input:
  1. grid = n * n matrix
  2. K = number of rotations


Output: n * n matrix

Please specify memory and time complexity interns of n and K

Ex: Rotation once (K = 1)

Input:
 1. grid = [
     [0, 16,  255],
     [8, 128,  32],
     [0,    0,     0]	
]
2. K = 1
Output:

[
	[0,   8,     0],
	[0, 128,  16],
            [0, 32,  255]
]

## Hotel Reservation

A hotel manager has to process N bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand.

Write a module/ utility to achieve this with the following constraints:
Inputs:
- First list for arrival time of booking
- The second list for the departure time of booking
- Third is K which denotes the count of rooms
Output:
- A boolean which tells whether it's possible to make a booking
false means there are not enough rooms for N booking
true means there are enough rooms for N booking
Example:
Inputs:
- arrivals = [1, 3, 5]
- departures = [2, 6, 10]
- K = 1
Output: false. At day = 5, there are 2 guests in the hotel. But we have only one room.
Please specify time/ memory complexity in terms of arrivals, departure, K
