//exercitiu 1

function getDigits(n) {
    let str = "";
    for (let i = 0; i < n.length; i++) {
        if (!isNaN(parseInt(n[i]))) {
            str = str + n[i];
        }
    }
    return str;
}

//exercitiu 2

function getLetters(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
            result += str[i];
        }
    }
    return result;
}

//exercitiu 3

function getFirst5Letters(str) {
    let result = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
            result += str[i];
            count++;
        }
        if (count === 5) {
            return result;;
        }
    }
    return result;
}
// exercitiu 4

function concatenate(n) {
    let str = "";
    for (let i = 0; i < n.length; i++) {
        str = str + n[i];
    }
    return str;
}

// exercitiu 5

function getAllDigits(a) {
    let strFinal = "";
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (!isNaN(parseInt(a[i][j]))) {
                strFinal = strFinal + a[i][j];
            }
        }
    }
    return strFinal;
}

// exercitiu 6

function invertAllStrings(a) {
    let arrFinal = [];
    for (let i = 0; i < a.length; i++) {
        let str = "";
        for (let j = a[i].length - 1; j >= 0; j--) {
            str = str + a[i][j];
        }
        arrFinal.push(str);
    }
    return arrFinal;
}

// exercitiu 7

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//exercitiu 8

function cmmdc(a, b) {
    for (let i = a; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}

//exercitiu 9

function cmmmc(a, b) {
    if (b < a) {
        let aux = a;
        a = b;
        b = aux;
    }
    for (let i = b; ; i++) {
        if (i % b === 0 && i % a === 0) {
            return i;
        }
    }
}

// exercitiu 10

function divizori(n) {
    let array = []
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            array.push(i);
        }
    }
    return array;
}

// exercitiu 11

function palindrom(str) {
    str = str + "";
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// exercitiu 12

function sort(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }
    let a = true;
    while (a) {
        a = false;
        for (let i = 0; i < evenNumbers.length - 1; i++) {
            if (evenNumbers[i] > evenNumbers[i + 1]) {
                let temp = evenNumbers[i];
                evenNumbers[i] = evenNumbers[i + 1];
                evenNumbers[i + 1] = temp;
                a = true;
            }
        }
    }
    return evenNumbers;
}

// exercitiu 13

function sortAscDesc(arr) {
    let k;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % 2 === 0 && arr[j] % 2 === 0) {
                if (arr[i] > arr[j]) {
                    k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
            if (arr[i] % 2 !== 0 && arr[j] % 2 !== 0) {
                if (arr[i] < arr[j]) {
                    k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
            if (arr[i] % 2 !== 0 && arr[j] % 2 === 0) {
                k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;
            }
        }
    }
    return arr;
}

// exercitiu 14

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1
    arr.sort(function (a, b) {
        return a - b;
    })
    while (left <= right) {
        let middle = parseInt((left + right) / 2);
        if (arr[middle] < n) {
            left = middle + 1;
        } else if (arr[middle] > n) {
            right = middle - 1;
        } else {
            return true;
        }
    }
    return false;
}

// exercitiu 15

function countBinarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1
    arr.sort(function (a, b) {
        return a - b;
    })

    let calls = 0;
    recursivExistaBinar(left, right);

    function recursivExistaBinar(left, right) {
        if (left <= right) {
            let middle = parseInt((left + right) / 2);
            if (arr[middle] < n) {
                left = middle + 1;
                calls++;
                recursivExistaBinar(left, right);
            } else if (arr[middle] > n) {
                right = middle - 1;
                calls++;
                recursivExistaBinar(left, right);
            } else if (arr[middle] === n) {
                calls++;
                return calls;
            }
        }
    }
    return calls;
}