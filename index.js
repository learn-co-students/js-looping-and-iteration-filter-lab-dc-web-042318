// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, string) {
    const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(word => word.toLowerCase()[0] === string.toLowerCase()[0])
    return result
}

function matchName(drivers, string) {
    const result = drivers.filter(obj => obj.name === string)
    return result
}