// Code your solution in this file

function findMatching(array, name) {
	return array.filter(function (person) { return person.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(array, letters) {
	return array.filter(function (person) { return person.toLowerCase().indexOf(letters.toLowerCase())===0 })
}

function matchName(array, name) {
	const output = []
	for (driver of array) {
		if (driver.name === name) {
			output.push(driver)
		}
	}
	return output
}