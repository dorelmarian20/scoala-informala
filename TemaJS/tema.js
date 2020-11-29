//exercitiu 1

function equals(a, b) {
    if (a === b) {
        return true;
    } else if (b !== a) {
        return false;
    }
}

//exercitiu 2

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else if (a > b) {
        return 1;
    }
}

//exercitiu 3

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//exercitiu 4

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//exercitiu 5

function suma(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// exercitiu 6

function prim(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

//TODO: exercitiu 7

function sumaPrime (num) {
    let sum = 0;
    for(var i=1; i<=num; i++){
      sum += i;
    }
    return sum * 4 / 2 - 2;
  }


// exercitiu 8
function invers(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}

//exercitiu 9

function produsImpare(n) {
    var p = 1;
    for (var i = 1; i <= 2 * n - 1; i += 2) {
        p = p * i;
    }
    return (p);
}

// exercitiu 10

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

//exercitiu 11

function maxArray(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//exercitiu 12

function sumMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min + max;
}

//exercitiu 13

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
//exercitiu 14

function produsPozitive(arr) {
    let a = 1;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            a = a * arr[i];
        }
    }
    return a;
}

//exercitiu 15

function palindrom(str) {

    var len = str.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
