function findMatching (drivers, string) {
  let drive = drivers.filter(name => name.toUpperCase() == string.toUpperCase());
  return drive;
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
