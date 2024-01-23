const sumAll = function(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
    if (a < 0 || b < 0) {return "ERROR"}
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    while (min <= max) {
        sum += min;
        min += 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
