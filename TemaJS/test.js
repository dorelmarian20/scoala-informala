function sumaPrime(n){
    for(var i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }
    return i;
}
function sumaNumerePrime(n){
    var suma=0;
    var countPrime=0;
    for(var i=2; countPrime<n; i++){
        if(numarPrim(i)){
            suma=suma+i;
            countPrime=countPrime+1;
        }
    }
    return suma;
}
console.log(sumaPrime(5));