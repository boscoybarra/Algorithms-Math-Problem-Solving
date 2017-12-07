/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * Copyright Udacity
 *
 * Using a while loop, print out the countdown output above.
 NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".
Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your Code:
Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds

Solid rocket booster ignition and liftoff!
 */

var time = 60;

while (time>=0) {
  var timeToTakeOff =
  (time === 50) ? "Orbiter transfers from ground to internal power":
  (time === 31) ? "Ground launch sequencer is go for auto sequence start":
  (time === 16) ? "Activate launch pad sound suppression system":
  (time === 10) ? "Activate main engine hydrogen burnoff system":
  (time === 6) ? "Main engine start":
  (time === 0) ? "Solid rocket booster ignition and liftoff!":
  (time) ? "T-" + time + " seconds":"";

  time = time - 1;

  console.log(timeToTakeOff);

}
