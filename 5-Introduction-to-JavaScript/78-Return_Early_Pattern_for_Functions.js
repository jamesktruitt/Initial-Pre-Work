// Setup
function abTest(a, b) {
    // Only change code below this line
    var lessThan = 0;
    if (a < lessThan) {
        return;
    } else if (b < lessThan) {
        return;
    }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);
