function findMatching(drivers, string) {
  return drivers.filter(word => word.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    word => word[0].toLowerCase() === string[0].toLowerCase()
  );
}

function matchName(drivers, string) {
  return drivers.filter(object => object.name === string);
}
