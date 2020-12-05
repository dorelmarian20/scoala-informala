// exercitiu de interviu
//Trebuie afisate primele N numere
/*
function fizzBuzz(n) {
    var str = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str+="FizzBuzz";
        } else if (i % 3 === 0) {
            str+="Fizz";
        } else if (i % 5 === 0) {
            str+="Buzz";
        } else {
            str+=i;
        }
        if(i !== n){
            str+=", ";
        } 
    }
    return str;
}   
*/

/**
Bolt:
Afisam nr < N
Daca N este divizibil cu 7 atunci afisam bolt
Daca N are una din cifre 7 atunci afisam bolt

In rest trebuie sa afisam numarul + sensul in care merge cercul

1dreapta, 2 dreapta, 3dreapta,...
6dreapta, bolt, 8stanga, 9 stanga,....
13stanga, bolt,
15dreapta, 16 dreapta, bolt
 */
function bolt(n) {
    var directie = "dreapta";
    var str = "";
    for (var i = 1; i < n; i++) {
        if (i % 7 === 0 || div7(i)===true) {
            str += "Bolt";
            if (directie === "dreapta") {
                directie = "stanga";
            } else {
                directie = "dreapta";
            }
        } else {
            str += i + directie;
        }
        if (i < n - 1) {
            str += ", "
        }
    }
    return str;
}
function div7(x) {
    while (x > 0) {
        if ((x % 10) === 7) {
            return true;
        }
        x = Math.floor(x / 10);
    }
    return false;
}
console.log(bolt(100));

/**
    P1: 1
    P2: 2
    P3: 3
    P4: 4
    P5: 5
    P1: 6
    P2: BOLT
    P1: 8
    P5: 9
    P4: 10
    P3: 11
    P2: 12
    P1: 13
    P5: BOLT

 */
function boltPersoane(n) {
    var directie = "dreapta";
    var persoana = 1;
    var str = "";
    for (var i = 1; i < n; i++) {
        if (i % 7 === 0 || div7(i)===true) {
            if(directie === "dreapta"){
                persoana++;
                if(persoana>5) {
                    persoana = 1;
                }
            }else {
                persoana--;
                if(persoana< 1){
                    persoana = 5;
                }
            }
            str += "Bolt";
            if (directie === "dreapta") {
                directie = "stanga";
            } else {
                directie = "dreapta";
            }
        } else {
            str += "p" + persoana+": " + i + "\n";
            if(directie === "dreapta"){
                persoana++;
                if(persoana>5) {
                    persoana = 1;
                }
            }else {
                persoana--;
                if(persoana< 1){
                    persoana = 5;
                }
            }
            
        }
        
    }
    return str;
}
console.log(boltPersoane(100));