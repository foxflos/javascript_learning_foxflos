//function extractCurrencyValue(str) {
//    return +str.substr(1);
//}

let extractCurrencyValue = (str) => +str.substr(1);

alert(extractCurrencyValue('$120') === 120); // true