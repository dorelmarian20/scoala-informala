//for (/*initializarea*/ ;/*daca conditia este true*/ ;/*incremetare/decrementare ++/--*/) {
    //cod
//}
let array = [ 3, 6, 7,8,1,2,4,99,8,6,4,3,2];
array.length;//13 elemente
for (let i = 0; i<array.length; i++){
    let  val = array[i];
    console.log(val);
}
console.log("===============");
for (let i = array.length-1; i>=0; i--){
    let  val = array[i];
    console.log(val);
}
console.log("===============");
for (let i = 0; i<array.length; i++){
    if(array[i] % 2 === 0) {
        console.log(array[i]);
    }
}
console.log("===============");
function pow(a, b) {
    var p = 1;
        for(let i = 0;i<b; i++){
            p *= a;
        }
        return p;
}
console.log(pow(2,3));
console.log(pow(3,3));

console.log("===============");
function tablaInmultirii(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(x+"x"+i+"="+(x*i));
    }
}
console.log(tablaInmultirii(7))
console.log("===============");

function triunghi (n){
    for (let i = 1; i <=n; i++){
        let str = "";
        for (let j = 0; j <i; j++){
            str +=i;
        }
        console.log(str);
    }
}
triunghi(6);
console.log("===============");
function fibonaci (n) {
    let a = 1;
    let b = 1;
    let c = 1;
    for (i = 2; i<n; i++) {
        c = a+b;
        a=b;
        b=c;
    }
    return c;
}
console.log(fibonaci(1));
console.log(fibonaci(2));
console.log(fibonaci(3));
console.log(fibonaci(6));
console.log(fibonaci(8));

console.log("===============");

function pretulCorect (a, b, x) {
    let difA = x -a;
    let difB = x -b;
    if (difA<0) {
        return difA *= -1;
    }else if (difB < 0){
        return difB *= -1;
    }else if (difA < difB) {
        return a;
    }else {
        return b;
    }
}
console.log(pretulCorect(5, 100, 2));
console.log("===============");
//Popescu I. Ion
//Popescu I. Ion (Necula)
function numeComplet (nume, initiala, prenume, numeNastere){
    if(nume===numeNastere){
        return nume + " " + initiala[0]+ ". "+prenume;
    }else {
        return nume + " " + initiala[0]+ ". "+prenume+ " ("+numeNastere+")";
    }
}
console.log(numeComplet("Popescu", "Ionut","Ion","Popescu"));
console.log(numeComplet("Popescu", "Ionut","Ion","necula"));