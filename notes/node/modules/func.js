const counter = function (arr) {
    return `There are ${arr.length} elements in the array`
}

const adder = function (a, b) {
    return `the sum of two numbers is ${a + b}`
}

module.exports = {
    counter: counter,
    adder: adder
};