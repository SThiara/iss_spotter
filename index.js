const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

/* const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchFlyovers } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  fetchCoordsByIP(ip, (error, location) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log('It worked! Returned location:' , location);
    fetchFlyovers(location, (error, spaceCoords) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
      console.log('It worked! Returned location:' , spaceCoords);
    });
  });
});
 */
