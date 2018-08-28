// Code your solution in this file
function findMatching(collection, name){
  return collection.filter(function (driver) {
     if (driver.toLowerCase() === name.toLowerCase()){
       return driver
     }
  })
};

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
