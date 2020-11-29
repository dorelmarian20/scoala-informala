//definitia functiei
function numeFunctie(parametrul1, paramentrul2) {
    var x = 5; //var locale
    x += 7;
    x/5;
    //....
}

numeFunctie(); // apelul functiei

function sum(a,b) {
    var sum = a+b;
    return sum;
}

sum(5, 10); // 15

var x = sum(2, 5);//7

var y = sum (x, x) + sum (sum(2,x), x);
//y = sum(7, 7) + sum ( sum(2,7), 7);
//y = 14 + 16;//30

function noReturn() {

}
noReturn();//undefined

function perimetruPatrat(latura) {
    return 4 * latura;
}

console.log("perimetruPatrat", perimetruPatrat(5));
console.log("perimetruPatrat", perimetruPatrat(4));
console.log("perimetruPatrat", perimetruPatrat(7));
console.log("perimetruPatrat", perimetruPatrat(0.5));

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log("celsiusToFahrenheit", celsiusToFahrenheit(5));
console.log("celsiusToFahrenheit", celsiusToFahrenheit(4));
console.log("celsiusToFahrenheit", celsiusToFahrenheit(7));
console.log("celsiusToFahrenheit", celsiusToFahrenheit(0.5));

// scrisoarea < 50g => 5lei
// scrisoarea >=50g => 5 lei = 10bani/gram
function pretScrisoare(gramaj) {
    var pret = 0;
    if(gramaj<50) {
        pret = 5;
       //daca conditia este true 
    } else {
        pret = 5 + (gramaj - 50) * 0.1;
        //daca conditia este false
    }
    return pret;
}
console.log(pretScrisoare(25));
console.log(pretScrisoare(0));
console.log(pretScrisoare(62));

function inaltime(hPersoana) {
    if(hPersoana < 1.5) {
        return "esti scund";
    } else if(hPersoana < 1.75) {
        return "esti mediu";
    } else if(hPersoana < 1.90) {
        return "esti ianlt";
    } else {
        return "esti un gigant";
    }
}
console.log(inaltime(1.3));
console.log(inaltime(1.70));
console.log(inaltime(1.88));
console.log(inaltime(2.1));