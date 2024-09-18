function addCommas(num) {
    // Convert the number to a string
    let [integerPart, decimalPart] = num.toString().split('.');

    // Handle negative numbers
    let sign = '';
    if (integerPart.startsWith('-')) {
        sign = '-';
        integerPart = integerPart.slice(1); // Remove the negative sign
    }

    // Add commas to the integer part
    let result = '';
    while (integerPart.length > 3) {
        result = ',' + integerPart.slice(-3) + result;
        integerPart = integerPart.slice(0, -3);
    }

    result = integerPart + result; // Append the remaining part of the integer

    // If there's a decimal part, add it back
    if (decimalPart) {
        result += '.' + decimalPart;
    }

    return sign + result;
}


module.exports = addCommas;