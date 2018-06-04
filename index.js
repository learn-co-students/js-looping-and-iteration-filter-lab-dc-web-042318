// Code your solution in this file

function findMatching(drivers, name) {
  //console.log(drivers)
  //matchedDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  //return matchedDrivers;
  function checkName(driver) {
    return name.toLowerCase() === driver.toLowerCase();
  }
  return drivers.filter(checkName)
}

function fuzzyMatch(drivers, letters) {
  function checkLetters(driver) {
    return letters[0].toLowerCase() === driver[0].toLowerCase();
  }
  return drivers.filter(checkLetters);
}

function matchName(drivers, string) {
  function objNameCheck(driver) {
    if (typeof driver === 'object') {
      return driver.name === string
    }
  }
  return drivers.filter(objNameCheck);
}
