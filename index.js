// Code your solution in this file
 function findMatching(drivers, string) {
   return drivers.filter(function (driver) {
     if (driver.toLowerCase() === string.toLowerCase()) {
       return driver;
     }
   })
 }


function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    if (driver.slice(0,2) === string) {
      return driver;
    }
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    if (driver.name === string) {
      return driver;
    }
  })
}
