const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(body) {
  const IP = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${IP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const coords = {
    "latitude": JSON.parse(body).latitude, 
    "longitude": JSON.parse(body).longitude
  }
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP) // does the return from the previous function automatically get passed in as a parameter?
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data); // why does the return have to be an object?
    return response;
  });
};

module.exports = { nextISSTimesForMyLocation };