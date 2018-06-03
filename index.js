// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching (drivers, string) {
    return drivers.filter(function (name) { return name.toUpperCase() === string.toUpperCase() })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(name)  { return name.slice(0,1) === string.slice(0,1)})

}

function matchName(drivers, string) {
    const result = drivers.filter(function (driver) { return driver.name.toUpperCase() === string.toUpperCase() })
return result
}

